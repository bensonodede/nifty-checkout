import React from "react";
import { Mutation } from "react-apollo";

// Import components
import { Modal } from "components/modal";
import { SimpleLoader } from "components/loader";

// Import graphql operations
import { DELETE_PRODUCT } from "components/graphql/mutation";
import { PRODUCTS_FEED_QUERY } from "components/graphql/query";

// Import styles
import "./styles.scss";

const DeleteModal = ({ data, isDeleteOpen, toggleModalDelete }) => {
  const { id, imgUrl } = data;

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
    <Modal isOpen={isDeleteOpen} toggleModal={toggleModalDelete}>
      <div>
        <Mutation
          mutation={DELETE_PRODUCT}
          onCompleted={data => {
            // Redirect to store product page
            // toggleModal;
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
              <div className="delete-modal">
                {/* Delete confirmation text */}
                <div className="content">
                  <h5 className="title is-size-5 is-marginless">Delete item</h5>
                  <p className="is-size-6">
                    Are you sure you want to delete this item? This action is
                    permanent and cannot be reversed.
                  </p>
                </div>

                {loading ? (
                  <div className="delete-modal__loader-body">
                    <div className="delete-modal__loader">
                      <SimpleLoader />
                    </div>
                  </div>
                ) : (
                  /* Button row */
                  <div className="delete-modal__row">
                    <button
                      onClick={() => handleDelete(mutate)}
                      className="button is-primary delete-modal__btn"
                    >
                      Delete item
                    </button>

                    {/* Cancel button */}
                    <button onClick={toggleModalDelete} className="button">
                      Cancel
                    </button>
                  </div>
                  /* End button row */
                )}
              </div>
            );
          }}
        </Mutation>
      </div>
    </Modal>
  );
};

export default DeleteModal;
