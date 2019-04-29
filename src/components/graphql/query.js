import gql from "graphql-tag";

const LOGIN_QUERY = gql`
  query LoginQuery($uid: String!) {
    login(uid: $uid) {
      uid
      stores {
        id
        storeName
      }
    }
  }
`;

export { LOGIN_QUERY };
