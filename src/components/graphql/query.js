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

// Get Store subscription plan
const STORE_SUBSCRIPTION_PLAN_QUERY = gql`
  query StoreSubscriptionPlanQuery($storeUsername: String!) {
    storeSubscriptionPlan(storeUsername: $storeUsername) {
      id
      start
      end
      status
    }
  }
`;

// Poll for subscription payment
const SUBSCRIPTION_PLAN_PAYMENT_POLL_QUERY = gql`
  query SubscriptionPlanPaymentPollQuery($id: String!) {
    subscriptionPlanPaymentPoll(id: $id) {
      id
      merchantRequestID
      checkoutRequestID
      mpesaReceiptNumber
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
      payoutNumber
      policyReturns
      policyDelivery
    }
  }
`;

// Get number of products in a store
const PRODUCTS_COUNT = gql`
  query ProductsByStoreCount($storeUsername: String!) {
    productsByStoreCount(storeUsername: $storeUsername) {
      count
    }
  }
`;

// Get all products from a store
const PRODUCTS_BY_STORE_QUERY = gql`
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
      createdAt
      updatedAt
      name
      description
      price
      imgUrls
      quantity
      options {
        id
        title
        tags
      }
      variants {
        id
        combinations
        label
        price
        publish
        quantity
      }
    }
  }
`;

// Get a product by ID
const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      id
      name
      price
      description
      imgUrls
      quantity
      options {
        id
        title
        tags
      }
      variants {
        id
        combinations
        label
        price
        publish
        quantity
      }
    }
  }
`;

// Get number of Orders in a store
const ORDERS_COUNT = gql`
  query OrdersByStoreCount($storeUsername: String!, $orderStatus: Int) {
    ordersByStoreCount(
      storeUsername: $storeUsername
      orderStatus: $orderStatus
    ) {
      count
    }
  }
`;

// Get store domain
const DOMAIN_QUERY = gql`
  query DomainQuery($storeUsername: String!) {
    domain(storeUsername: $storeUsername) {
      id
      domainName
      registrarUrl
      verified
    }
  }
`;

// Get all orders from a store
const ORDERS_BY_STORE_QUERY = gql`
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
      createdAt
      updatedAt
      orderId
      orderStatus
      total
      orderProducts {
        id
        product {
          id
          imgUrls
        }
      }
    }
  }
`;

// Get an order by orderId
const ORDER_BY_ORDERID_QUERY = gql`
  query OrderByOrderIdQuery($storeUsername: String!, $orderId: Int!) {
    orderByOrderId(storeUsername: $storeUsername, orderId: $orderId) {
      id
      orderId
      createdAt
      orderStatus
      paymentStatus
      orderProducts {
        id
        product {
          id
          name
          imgUrls
          price
          options {
            id
            tags
            title
          }
        }
        variant {
          id
          combinations
          label
          price
        }
        selectedQuantity
      }
      payment {
        id
        mpesaReceiptNumber
        phoneNumber
        gross
        amount
        fees
      }
      deliveryLocation {
        lat
        lng
      }
      store {
        storeLocation {
          lat
          lng
        }
      }
      productTotal
      deliveryFee
      total
    }
  }
`;

export {
  USER_COUNT_QUERY,
  LOGIN_QUERY,
  // Store query
  STORE_QUERY,
  STORE_USERNAME_EXISTS_QUERY,
  STORE_SUBSCRIPTION_PLAN_QUERY,
  SUBSCRIPTION_PLAN_PAYMENT_POLL_QUERY,
  // Products query
  PRODUCTS_BY_STORE_QUERY,
  PRODUCTS_COUNT,
  PRODUCT_QUERY,
  // Orders query
  ORDERS_COUNT,
  ORDERS_BY_STORE_QUERY,
  ORDER_BY_ORDERID_QUERY,
  // Domain query
  DOMAIN_QUERY,
};
