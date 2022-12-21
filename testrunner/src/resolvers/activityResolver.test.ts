import { gql } from "@apollo/client/core";
import { ITestUser } from "src/interfaces/entitites/userTestInterface";
import clearDB from "./helpers/clearDB";
import { generateTestUser } from "./helpers/generate/generateTestUser";
import { getTokenForUser } from "./helpers/generate/getTokenForUser";
import client from "./helpers/getClient";

describe("User resolver", () => {
  let testUser: ITestUser;
  let testUserToken: string;

  beforeAll(async () => {
    await clearDB();

    testUser = await generateTestUser();
    testUserToken = await getTokenForUser("test", testUser.email);
  });

  it("get all activites", async () => {
    const res = await client.query({
      query: gql`
        query GetAllActivities {
          getAllActivities {
            activityId
            title
          }
        }
      `,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: testUserToken,
        },
      },
    });
    expect(res.data?.getAllActivities).toEqual([]);
  });
});
