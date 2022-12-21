import { gql } from "@apollo/client/core";

export const CREATE_ACTIVITY = gql`
  mutation CreateActivity(
    $activityType: String!
    $description: String!
    $carbonQuantity: Float!
    $activityDate: DateTime!
    $title: String!
  ) {
    createActivity(
      activityType: $activityType
      description: $description
      carbonQuantity: $carbonQuantity
      activityDate: $activityDate
      title: $title
    ) {
      title
      user {
        userId
        email
      }
      activityId
      activityType {
        name
        activityTypeId
      }
      carbonQuantity
      description
      createdAt
      activityDate
    }
  }
`;
