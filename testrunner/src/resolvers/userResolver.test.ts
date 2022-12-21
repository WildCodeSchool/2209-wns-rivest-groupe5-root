import { gql } from "@apollo/client/core";
import client from "./helpers/getClient";
import clearDB from "./helpers/clearDB";

const CREATE_USER = gql`
  mutation CreateUser(
    $lastname: String!
    $firstname: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      lastname: $lastname
      firstname: $firstname
      password: $password
      email: $email
    ) {
      email
    }
  }
`;

describe("User resolver", () => {
  beforeAll(async () => {
    await clearDB();
  });

  it("create user", async () => {
    const res = await client.mutate({
      mutation: CREATE_USER,
      variables: {
        email: "test@test.com",
        password: "test",
        firstname: "testfirst",
        lastname: "testlast",
      },
      fetchPolicy: "no-cache",
    });

    expect(res.data?.createUser).toEqual({
      __typename: "User",
      email: "test@test.com",
    });
  });

  let token: string;

  it("gets token if user is valid", async () => {
    const res = await client.query({
      query: gql`
        query Query($password: String!, $email: String!) {
          getToken(password: $password, email: $email) {
            token
            userFromDB {
              userId
              email
              firstname
              lastname
            }
          }
        }
      `,
      variables: { password: "test", email: "test@test.com" },
      fetchPolicy: "no-cache",
    });
    expect(res.data?.getToken.token).toMatch(/^[\w-]*\.[\w-]*\.[\w-]*$/);
    token = res.data?.getToken.token;
  });

  it("query the connected user data with the token", async () => {
    console.log("token for getUserData", token);
    const res = await client.query({
      query: gql`
        query Query {
          getMyUserData {
            email
          }
        }
      `,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: token,
        },
      },
    });
    expect(res.data?.getMyUserData).toEqual({
      email: "test@test.com",
      __typename: "User",
    });
  });

  it("query the user by ID", async () => {
    const res = await client.query({
      query: gql`
        query Query {
          getMyUserData {
            email
          }
        }
      `,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          authorization: token,
        },
      },
    });
    expect(res.data?.getMyUserData).toEqual({
      email: "test@test.com",
      __typename: "User",
    });
  });
});
