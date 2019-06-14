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

const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $price: Float!
    $file: Upload!
    $storeName: String!
  ) {
    createProduct(
      name: $name
      price: $price
      file: $file
      storeName: $storeName
    ) {
      id
      name
      price
      imgUrl
      store {
        storeName
      }
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: String!
    $imgUrl: String!
    $file: Upload!
    $name: String!
    $price: Float!
  ) {
    updateProduct(
      id: $id
      imgUrl: $imgUrl
      file: $file
      name: $name
      price: $price
    ) {
      id
      name
      price
      imgUrl
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!, $imgUrl: String!) {
    deleteProduct(id: $id, imgUrl: $imgUrl) {
      id
    }
  }
`;
export { CREATE_STORE, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT };
