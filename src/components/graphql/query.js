import gql from "graphql-tag";

// User count
const USER_COUNT_QUERY = gql`
  query UserCountQuery {
    userCount {
      count
    }
  }
`;

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

// Get number of products in a store
const PRODUCTS_COUNT = gql`
  query productsByStoreCount($storeName: String!) {
    productsByStoreCount(storeName: $storeName) {
      count
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

// Get an order by orderId
const ORDER_ORDERID_QUERY = gql`
  query OrderByOrderIdQuery($storeName: String!, $orderId: Int!) {
    orderByOrderId(storeName: $storeName, orderId: $orderId) {
      id
      orderId
      orderStatus
      paymentStatus
      createdAt
      payment {
        id
        mpesaReceiptNumber
        phoneNum
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
    $storeName: String!
    $orderStatus: Int
    $first: Int
    $skip: Int
    $orderBy: OrdersOrderByInput
  ) {
    ordersByStore(
      storeName: $storeName
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
  LOGIN_QUERY,
  // Products query
  PRODUCTS_FEED_QUERY,
  PRODUCTS_COUNT,
  PRODUCT_QUERY,
  PRODUCT_HUMANID_QUERY,
  // Orders query
  ORDER_ORDERID_QUERY,
  ORDERS_FEED_QUERY
};
