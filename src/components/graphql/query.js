import gql from "graphql-tag";

// Login a user
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

// Get all products from a store
const PRODUCTS_FEED_QUERY = gql`
  query ProductsByStoreQuery(
    $storeName: String!
    $first: Int
    $skip: Int
    $orderBy: ProductsOrderByInput
  ) {
    productsByStore(
      storeName: $storeName
      first: $first
      skip: $skip
      orderBy: $orderBy
    ) @connection(key: "productsByStore", filter: ["type"]) {
      id
      humanId
      name
      price
      imgUrl
    }
  }
`;

// Get an order by ID
const ORDER_QUERY = gql`
  query OrderQuery($id: String!) {
    order(id: $id) {
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

// Get a product by ID
const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      name
      price
      imgUrl
    }
  }
`;

// Get a product by humanId
const PRODUCT_HUMANID_QUERY = gql`
  query ProdcutByHumanIdQuery($storeName: String!, $humanId: String!) {
    productByHumanId(storeName: $storeName, humanId: $humanId) {
      id
      humanId
      name
      price
      imgUrl
    }
  }
`;

export {
  LOGIN_QUERY,
  ORDER_QUERY,
  PRODUCTS_FEED_QUERY,
  PRODUCT_QUERY,
  PRODUCT_HUMANID_QUERY
};
