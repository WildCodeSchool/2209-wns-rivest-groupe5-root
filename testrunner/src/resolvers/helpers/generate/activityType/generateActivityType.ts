import client from "../../getClient";
import { CREATE_ACTIVITY_TYPE } from "../../graphql/mutations/activityType/createActivityType";

export const generateTestActivityType = async (
  name: string,
  adminToken: string
): Promise<string> => {
  const res = await client.mutate({
    mutation: CREATE_ACTIVITY_TYPE,
    variables: {
      name,
    },
    fetchPolicy: "no-cache",
    context: {
      headers: {
        authorization: adminToken,
      },
    },
  });

  return res.data.createActivityType.name;
};
