import React from "react";
import { Mutation } from "react-apollo";
import { BottomModal } from "../../modal";
import { DELETE_PRODUCT } from "../../graphql/mutation";
import { PRODUCTS_FEED_QUERY } from "../../graphql/query";
//
import "./styles.css";

const DeleteModal = props => {
  let { name, id, imgUrl } = props.location.state;

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
        props.history.go(-2);
      }}
      update={(cache, { data: { deleteProduct } }) => {
        //

        console.log(deleteProduct);
        let { __typename } = deleteProduct;

        try {
          //
          const data = cache.readQuery({
            query: PRODUCTS_FEED_QUERY,
            variables: {
              type: __typename
            }
          });

          console.log(data);
          const productsArr = data.productsByStore.filter(
            product => product.id !== deleteProduct.id
          );
          console.log(productsArr);
          //
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
                    Are you sure you want to delete this product?
                  </p>
                </div>

                {loading ? (
                  <p>Loading...</p>
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
