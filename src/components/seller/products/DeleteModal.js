import React from "react";
import { Mutation } from "react-apollo";

// Import components
import { BottomModal } from "../../modal";
import { Loader } from "../../loader";

// Import graphql operations
import { DELETE_PRODUCT } from "../../graphql/mutation";
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";

// Import styles
import "./styles.css";

const DeleteModal = props => {
  let { name, id, imgUrl } = props.location.state;
  let { storeName } = props.match.params;

  // Run mutation to delete product
  const handleDelete = async mutate => {
    await mutate({
      variables: {
        id,
        imgUrl
      }
    });
  };

  return (
    <Mutation
      mutation={DELETE_PRODUCT}
      onCompleted={data => {
        console.log(data);
        // Redirect to store product page
        props.history.push(`/${storeName}/products`);
      }}
      update={(cache, { data: { deleteProduct } }) => {
        // Get mutation typename
        let { __typename } = deleteProduct;

        try {
          // Query cache
          const data = cache.readQuery({
            query: PRODUCTS_FEED_QUERY,
            variables: {
              type: __typename
            }
          });

          // Remove deleted product from array of cached products
          const productsArr = data.productsByStore.filter(
            product => product.id !== deleteProduct.id
          );

          // Write new array to cache
          cache.writeQuery({
            query: PRODUCTS_FEED_QUERY,
            variables: {
              type: __typename
            },
            data: {
              productsByStore: productsArr
            }
          });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(mutate, { loading, error }) => {
        // Handle errors
        if (error) {
          console.log(error);
        }

        /* Delete modal component */
        return (
          <BottomModal {...props.history}>
            <div>
              <div className="product-modal__header">
                <p className="product-modal__header-text">{name}</p>
              </div>

              {/* Product modal content */}
              <div className="delete-modal__content">
                {/* Delete confirmation text */}
                <div>
                  <p className="delete-modal__text">
                    Are you sure you want to delete this item?
                  </p>
                </div>

                {loading ? (
                  <div className="delete-modal__loader-body">
                    <div className="delete-modal__loader">
                      <Loader />
                    </div>
                  </div>
                ) : (
                  /* Button row */
                  <div className="delete-modal__row">
                    <button
                      onClick={() => handleDelete(mutate)}
                      className="delete-modal__btn delete-modal__btn--warn"
                    >
                      Delete
                    </button>

                    {/* Cancel button */}

                    <button
                      onClick={props.history.goBack}
                      className="delete-modal__btn"
                    >
                      Cancel
                    </button>
                  </div>
                  /* End button row */
                )}
              </div>
            </div>
          </BottomModal>
        );
      }}
    </Mutation>
  );
};
export default DeleteModal;
