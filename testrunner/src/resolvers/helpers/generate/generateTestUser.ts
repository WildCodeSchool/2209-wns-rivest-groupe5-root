import { gql } from "@apollo/client/core";
import { ITestUser } from "src/interfaces/entitites/userTestInterface";
import client from "../getClient";

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
      createdAt
      firstname
      lastname
      userId
    }
  }
`;

export const generateTestUser = async (): Promise<ITestUser> => {
  const res = await client.mutate({
    mutation: CREATE_USER,
    variables: {
      email: `test${Math.floor(Math.random() * 1000000)}@test.com`,
      password: "test",
      firstname: "testfirst",
      lastname: "testlast",
    },
    fetchPolicy: "no-cache",
  });

  return res.data?.createUser;
};
