import gql from "graphql-tag";

// Create a store
const CREATE_STORE = gql`
  mutation CreateStore(
    $storeName: String!
    $storeUsername: String!
    $phoneNumber: String!
    $payoutNumber: String!
    $storeLocation: LocationInput!
    $storeLocationAddress: String!
    $costPerKm: String!
    $minDeliveryFee: String!
    $policyDelivery: String!
    $policyReturns: String!
    $uid: String!
  ) {
    createStore(
      storeName: $storeName
      storeUsername: $storeUsername
      phoneNumber: $phoneNumber
      payoutNumber: $payoutNumber
      storeLocation: $storeLocation
      storeLocationAddress: $storeLocationAddress
      costPerKm: $costPerKm
      minDeliveryFee: $minDeliveryFee
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
const UPDATE_STORE_PAYOUT_INFO = gql`
  mutation UpdateStorePayoutInfo($id: String!, $payoutNumber: String!) {
    updateStorePayoutInfo(id: $id, payoutNumber: $payoutNumber) {
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
    $imgUrls: [String!]!
    $description: String!
    $quantity: Float
    $options: [OptionInput!]!
    $variants: [VariantInput!]!
    $storeUsername: String!
  ) {
    createProduct(
      name: $name
      price: $price
      imgUrls: $imgUrls
      description: $description
      quantity: $quantity
      options: $options
      variants: $variants
      storeUsername: $storeUsername
    ) {
      id
      createdAt
      updatedAt
      name
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

// Update a product
const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $name: String!
    $price: Float!
    $imgUrls: [String!]!
    $description: String!
    $quantity: Float
    $options: [OptionInput!]!
    $variants: [VariantInput!]!
    $id: String!
  ) {
    updateProduct(
      name: $name
      price: $price
      imgUrls: $imgUrls
      description: $description
      quantity: $quantity
      options: $options
      variants: $variants
      id: $id
    ) {
      id
      createdAt
      updatedAt
      name
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
        quantity
        publish
      }
    }
  }
`;

// Delete a product
const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!, $imgUrls: [String!]!) {
    deleteProduct(id: $id, imgUrls: $imgUrls) {
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

// Add domain
const CREATE_DOMAIN = gql`
  mutation CreateDomain($storeUsername: String!, $domainName: String!) {
    createDomain(storeUsername: $storeUsername, domainName: $domainName) {
      id
      registrarUrl
      domainName
      verified
    }
  }
`;

// Delete cloudinary file
const DELETE_CLOUDINARY_FILE = gql`
  mutation DeleteCloudinaryFile($imgUrl: String!) {
    deleteCloudinaryFile(imgUrl: $imgUrl)
  }
`;

export {
  // Store mutations
  CREATE_STORE,
  UPDATE_STORE_INFO,
  ACTIVATE_SUBSCRIPTION_PLAN,
  UPDATE_SUBSCRIPTION_PLAN,
  UPDATE_STORE_PAYOUT_INFO,
  // Product mutations
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  // Order mutations
  CREATE_ORDER,
  TOGGLE_ORDER_STATUS,
  // Domain mutations
  CREATE_DOMAIN,
  // Cloudinary mutation
  DELETE_CLOUDINARY_FILE,
};
