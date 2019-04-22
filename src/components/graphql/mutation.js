import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($phoneNum: String!) {
    login(phoneNum: $phoneNum) {
      token
      seller {
        id
        storeName
        phoneNum
      }
    }
  }
`;

export { LOGIN_MUTATION };
