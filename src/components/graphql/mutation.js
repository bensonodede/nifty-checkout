import gql from "graphql-tag";

const CREATE_STORE = gql`
  mutation CreateStore($storeName: String!, $phoneNum: String!, $uid: String!) {
    createStore(storeName: $storeName, phoneNum: $phoneNum, uid: $uid) {
      id
      storeName
      phoneNum
      user {
        uid
      }
    }
  }
`;

export { CREATE_STORE };
