import gql from "graphql-tag";

// Create a store
const CREATE_STORE = gql`
  mutation CreateStore(
    $storeName: String!
    $storeUsername: String!
    $phoneNumber: String!
    $payoutNumber: String!
    $policyDelivery: String!
    $policyReturns: String!
    $uid: String!
  ) {
    createStore(
      storeName: $storeName
      storeUsername: $storeUsername
      phoneNumber: $phoneNumber
      payoutNumber: $payoutNumber
      policyDelivery: $policyDelivery
      policyReturns: $policyReturns
      uid: $uid
    ) {
      id
      storeUsername
    }
  }
`;

// Update store
const UPDATE_STORE_INFO = gql`
  mutation UpdateStoreInfo(
    $id: String!
    $storeName: String!
    $storeUsername: String!
    $phoneNumber: String!
    $policyReturns: String!
    $policyDelivery: String!
  ) {
    updateStoreInfo(
      id: $id
      storeName: $storeName
      storeUsername: $storeUsername
      phoneNumber: $phoneNumber
      policyReturns: $policyReturns
      policyDelivery: $policyDelivery
    ) {
      id
      storeName
      storeUsername
      phoneNumber
      policyReturns
      policyDelivery
    }
  }
`;

// Activate subscription
const ACTIVATE_SUBSCRIPTION_PLAN = gql`
  mutation ActivateSubscriptionPlan(
    $storeUsername: String!
    $payoutNumber: String!
  ) {
    activateSubscriptionPlan(
      storeUsername: $storeUsername
      payoutNumber: $payoutNumber
    ) {
      id
      merchantRequestID
      checkoutRequestID
    }
  }
`;

const UPDATE_SUBSCRIPTION_PLAN = gql`
  mutation UpdateSubscriptionPlan($id: String!, $status: String!) {
    updateSubscriptionPlan(id: $id, status: $status) {
      id
      start
      end
      status
    }
  }
`;

// Update payout
const UPDATE_PAYOUT = gql`
  mutation UpdatePayout($id: String!, $payoutNumber: String!) {
    updatePayout(id: $id, payoutNumber: $payoutNumber) {
      id
      payoutNumber
    }
  }
`;

// Create a product
const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $price: Float!
    $file: Upload!
    $description: String!
    $storeUsername: String!
  ) {
    createProduct(
      name: $name
      price: $price
      file: $file
      description: $description
      storeUsername: $storeUsername
    ) {
      id
      humanId
      name
      price
      imgUrl
      store {
        storeUsername
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
    $description: String!
  ) {
    updateProduct(
      id: $id
      imgUrl: $imgUrl
      file: $file
      name: $name
      price: $price
      description: $description
    ) {
      id
      imgUrl
      name
      price
      description
      createdAt
      updatedAt
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
      shortCode
      password
      timestamp
      checkoutRequestID
    }
  }
`;

// Update an order
const TOGGLE_ORDER_STATUS = gql`
  mutation ToggleOrderStatus($id: String!, $orderStatus: Int!) {
    toggleOrderStatus(id: $id, orderStatus: $orderStatus) {
      id
      orderStatus
    }
  }
`;

export {
  // Store mutations
  CREATE_STORE,
  UPDATE_STORE_INFO,
  ACTIVATE_SUBSCRIPTION_PLAN,
  UPDATE_SUBSCRIPTION_PLAN,
  UPDATE_PAYOUT,
  // Product mutations
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  // Order mutations
  CREATE_ORDER,
  TOGGLE_ORDER_STATUS,
};
