import React from "react";
import numeral from "numeral";
import * as moment from "moment";

// Import components
import Options from "../options";
import { ImgLoader } from "components/loader";

// Import styles
import "./styles.scss";

const ProductItem = ({ item }) => {
  // Destructure props
  const { name, imgUrl, price, updatedAt } = item;

  return (
    <tr>
      <td>
        <div className="product-item__info">
          {/* Product image */}
          <ImgLoader src={imgUrl} alt={name} className="product-item__img" />

          {/* Product content */}
          <div className="content product-item__content">
            <h5 className="is-marginless is-size-6">{name}</h5>
            {/* Render on mobile and tablet */}
            <h5 className="is-marginless is-size-7 is-hidden-desktop product-item__price--mobile has-text-grey-light">
              {`${numeral(price).format("'0,0'")}`}{" "}
              <span className="product-item__price-currency--mobile">KSH</span>
            </h5>
          </div>
        </div>
      </td>

      {/* Desktop: Price cell */}
      <td>
        <div className="is-hidden-touch">
          <div className="product-item__price">
            <h5 className="is-marginless is-size-6">
              {`${numeral(price).format("'0,0'")}`}
              <span className="product-item__price-currency">KSH</span>
            </h5>
          </div>
        </div>
      </td>

      {/* Desktop: Last modified cell */}
      <td>
        <div className="is-hidden-touch">
          <div className="product-item__date">
            <h5 className="is-marginless is-size-6">
              {`${moment(updatedAt).format("MMM Do, YYYY")}`}
            </h5>
          </div>
        </div>
      </td>

      {/* Options cell */}
      <td>
        <div className="product-item__option">
          <Options data={item} />
        </div>
      </td>
    </tr>
  );

  // return (
  //   <>
  //     <tr className="product__item">
  //       <td className="product-item__info">
  //         {/* Product image */}
  //         <ImgLoader src={imgUrl} alt={name} className="product-item__img" />

  //         {/* Product content */}
  //         <div className="content product-item__content">
  //           <h5 className="is-marginless is-size-6">{name}</h5>
  //           {/* Render on mobile and tablet */}
  //           <h5 className="is-marginless is-size-7 is-hidden-desktop product-item__details has-text-grey-light">
  //             {`${numeral(price).format("'0,0'")}`}{" "}
  //             <span className="product-item__price-currency--mobile">KSH</span>
  //             <span className="product__item-dot"> · </span>
  //             Oct 10
  //           </h5>
  //         </div>
  //       </td>

  //       {/* Desktop: Price cell */}
  //       <td className="product__item is-hidden-touch">
  //         <div className="product-item__price">
  //           <h5 className="is-marginless is-size-6">
  //             {`${numeral(price).format("'0,0'")}`}
  //             <span className="product-item__price-currency">KSH</span>
  //           </h5>
  //         </div>
  //       </td>

  //       {/* Desktop: Modified cell */}
  //       <td className="product__item is-hidden-touch">
  //         <div className="product-item__date">
  //           <h5 className="is-marginless is-size-6">October 10, 2019</h5>
  //         </div>
  //       </td>

  //       {/* Options cell */}
  //       <td className="product-item__option">
  //         <Options data={item} />
  //       </td>
  //     </tr>
  //   </>
  // );
};

export default ProductItem;
