import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "../productItem";
import { Query } from "react-apollo";

// Import Graphql query
import { PRODUCTS_FEED_QUERY } from "../../../graphql/query";

// Import components
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";
import { Error } from "../../../error";
import Toast from "../../../toast";

// Import styles
import "./styles.scss";

class ProductList extends Component {
  render() {
    // Destructure route params
    let { storeName } = this.props.match.params;

    return (
      <div className="product-list">
        <Query
          query={PRODUCTS_FEED_QUERY}
          variables={{
            storeName,
            first: 5,
            skip: 0,
            orderBy: "updatedAt_DESC"
          }}
        >
          {({ loading, error, data, fetchMore }) => {
            // Error state
            if (error) {
              return <Toast content={"TESTING"} />;
            }

            // Loading state
            if (loading) {
              /* return <ProductLoader />; */
              return <p>loading...</p>;
            }

            console.log(data);

            let productNum = data.productsByStore.length;

            return (
              <div className="columns is-mobile is-multiline is-centered">
                {/*Product Header */}
                <div className="column is-10">
                  <div className="columns is-mobile is-multiline ">
                    <div className="column is-6 is-vcentered">
                      <h1 className="title is-size-4 is-marginless">
                        {productNum}{" "}
                        {productNum === 1 ? (
                          <span>product</span>
                        ) : (
                          <span>products</span>
                        )}
                      </h1>
                    </div>

                    <div className="column has-text-right">
                      <button className="button is-small is-primary is-outlined">
                        <span className="product-list__add-icon">
                          <Icon icon={ic_add} size={"100%"} />
                        </span>
                        Add new
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product table */}
                <div className="column is-10">
                  <table className="table is-fullwidth">
                    <thead className="is-hidden-touch">
                      <tr className="is-size-6">
                        <td>Product</td>
                        <td>Price</td>
                        <td>Last modified</td>
                        <td></td>
                      </tr>
                    </thead>

                    <tbody>
                      {data.productsByStore.map(item => (
                        <ProductItem data={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* End product table */}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default withRouter(ProductList);
