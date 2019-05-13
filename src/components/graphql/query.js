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
    ) {
      id
      name
      price
      imgUrl
    }
  }
`;

const PRODUCT_QUERY = gql`
  query ProductQuery($id: String!) {
    product(id: $id) {
      name
      price
      imgUrl
    }
  }
`;

export { LOGIN_QUERY, PRODUCTS_FEED_QUERY, PRODUCT_QUERY };
