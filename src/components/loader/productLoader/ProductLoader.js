import React from "react";
import ContentLoader from "react-content-loader";
import { CSSTransition } from "react-transition-group";

// Import styles
import "./styles.scss";

const productsKeys = [1, 2, 3, 4, 5];

const ProductLoader = () => (
  <>
    {productsKeys.map(item => (
      <tbody
        key={item}
        className="column is-12-mobile is-8-tablet is-8-desktop is-paddingless"
      >
        <CSSTransition
          appear={true}
          unmountOnExit={true}
          in={true}
          classNames="product-loader-animation"
          timeout={500}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <tr className="product-loader__container">
            <td>
              <ContentLoader
                className="product-loader"
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
              >
                <rect
                  className="product-loader__img"
                  x="3"
                  y="4"
                  rx="0"
                  ry="0"
                />
                <rect x="67" y="21" rx="0" ry="0" width="95" height="11" />
                <rect x="67" y="40" rx="0" ry="0" width="119" height="11" />
              </ContentLoader>
            </td>
          </tr>
        </CSSTransition>
      </tbody>
    ))}
  </>
);

export default ProductLoader;
