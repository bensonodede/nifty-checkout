import gql from "graphql-tag";

// Create a store
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

// Create a product
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
      humanId
      name
      price
      imgUrl
      store {
        storeName
      }
    }
  }
`;

// Update a product
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

// Delete a product
const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!, $imgUrl: String!) {
    deleteProduct(id: $id, imgUrl: $imgUrl) {
      id
    }
  }
`;

// Create an order
const CREATE_ORDER = gql`
  mutation CreateOrder(
    $buyerNum: String!
    $storeName: String!
    $productID: String!
    $price: Int!
  ) {
    createOrder(
      buyerNum: $buyerNum
      storeName: $storeName
      productID: $productID
      price: $price
    ) {
      id
      humanId
      uid
      status
      buyer {
        id
        phoneNum
      }
      store {
        id
        phoneNum
        storeName
      }
    }
  }
`;
export {
  CREATE_STORE,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_ORDER
};
