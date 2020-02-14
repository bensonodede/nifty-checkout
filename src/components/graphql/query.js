import gql from "graphql-tag";

// User count
const USER_COUNT_QUERY = gql`
  query UserCountQuery {
    userCount {
      count
    }
  }
`;

// Store username exists query
const STORE_USERNAME_EXISTS_QUERY = gql`
  query UsernameExistsQuery($storeUsername: String!) {
    usernameExists(storeUsername: $storeUsername)
  }
`;

// Login a user
const LOGIN_QUERY = gql`
  query LoginQuery($uid: String!) {
    login(uid: $uid) {
      uid
      stores {
        id
        storeUsername
      }
    }
  }
`;

// Get store details
const STORE_QUERY = gql`
  query StoreQuery($storeUsername: String!) {
    store(storeUsername: $storeUsername) {
      id
      storeName
      storeUsername
      phoneNumber
      payoutMethod
      payoutNumber
      policyReturns
      policyDelivery
    }
  }
`;

// Get number of products in a store
const PRODUCTS_COUNT = gql`
  query productsByStoreCount($storeUsername: String!) {
    productsByStoreCount(storeUsername: $storeUsername) {
      count
    }
  }
`;

// Get all products from a store
const PRODUCTS_FEED_QUERY = gql`
  query ProductsByStoreQuery(
    $storeUsername: String!
    $first: Int
    $skip: Int
    $orderBy: ProductsOrderByInput
  ) {
    productsByStore(
      storeUsername: $storeUsername
      first: $first
      skip: $skip
      orderBy: $orderBy
    ) @connection(key: "productsByStore", filter: ["type"]) {
      id
      humanId
      name
      price
      imgUrl
      updatedAt
    }
  }
`;

// Get a product by ID
const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      name
      price
      description
      imgUrl
    }
  }
`;

// Get an order by orderId
const ORDER_BY_ORDERID_QUERY = gql`
  query OrderByOrderIdQuery($storeUsername: String!, $orderId: Int!) {
    orderByOrderId(storeUsername: $storeUsername, orderId: $orderId) {
      id
      orderId
      orderStatus
      paymentStatus
      createdAt
      payment {
        id
        mpesaReceiptNumber
        phoneNumber
        amount
      }
      product {
        id
        name
        imgUrl
        price
      }
    }
  }
`;

// Get all products from a store
const ORDERS_FEED_QUERY = gql`
  query OrdersByStoreQuery(
    $storeUsername: String!
    $orderStatus: Int
    $first: Int
    $skip: Int
    $orderBy: OrdersOrderByInput
  ) {
    ordersByStore(
      storeUsername: $storeUsername
      orderStatus: $orderStatus
      first: $first
      skip: $skip
      orderBy: $orderBy
    ) @connection(key: "ordersByStore", filter: ["type"]) {
      id
      orderId
      orderStatus
      createdAt
      product {
        id
        name
        imgUrl
      }
    }
  }
`;

export {
  USER_COUNT_QUERY,
  STORE_USERNAME_EXISTS_QUERY,
  LOGIN_QUERY,
  STORE_QUERY,
  // Products query
  PRODUCTS_FEED_QUERY,
  PRODUCTS_COUNT,
  PRODUCT_QUERY,
  // Orders query
  ORDER_BY_ORDERID_QUERY,
  ORDERS_FEED_QUERY
};
