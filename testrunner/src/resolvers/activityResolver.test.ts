import { ITestUser } from "src/interfaces/entitites/userTestInterface";
import clearDB from "./helpers/clearDB";
import { generateTestActivityType } from "./helpers/generate/activityType/generateActivityType";
import { generateTestAdmin } from "./helpers/generate/user/generateTestAdmin";
import { generateTestUser } from "./helpers/generate/user/generateTestUser";
import { getTokenForUser } from "./helpers/generate/user/getTokenForUser";
import client from "./helpers/getClient";
import { CREATE_ACTIVITY } from "./helpers/graphql/mutations/activity/createActivity";
import { GET_ALL_ACTIVITIES } from "./helpers/graphql/queries/activity/getAllActivities";

describe("Activity resolver", () => {
  let testUser: ITestUser;
  let testUserToken: string;
  let testAdmin: ITestUser;
  let testAdminToken: string;
  let testActivityType: string;
  const activitytypetest = "testactivitytype";

  beforeAll(async () => {
    testUser = await generateTestUser();
    testUserToken = await getTokenForUser("test", testUser.email);
    testAdmin = await generateTestAdmin();
    testAdminToken = await getTokenForUser("test", testAdmin.email);

    testActivityType = await generateTestActivityType(
      activitytypetest,
      testAdminToken
    );
  });

  afterAll(async () => {
    await clearDB();
  });

  it("get all activites", async () => {
    const res = await client.query({
      query: GET_ALL_ACTIVITIES,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: testUserToken,
        },
      },
    });
    expect(res.data?.getAllActivities).toEqual([]);
  });

  it("create activity", async () => {
    const date = new Date();

    const res = await client.mutate({
      mutation: CREATE_ACTIVITY,
      variables: {
        activityType: testActivityType,
        description: "This is a test Activity",
        carbonQuantity: 10,
        activityDate: date,
        title: "Test Activity",
      },
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: testUserToken,
        },
      },
    });
    expect(res.data.createActivity.user.email).toEqual(testUser.email);
    expect(res.data.createActivity.activityType.name).toEqual(activitytypetest);
    expect(res.data.createActivity.carbonQuantity).toEqual(10);
  });
});
