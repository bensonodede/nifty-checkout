import React from "react";

// Import components
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { ic_image } from "react-icons-kit/md/ic_image";

const OrderProductItemImage = ({ product }) => {
  let imgUrl, name;

  // Check if product exists
  if (product) {
    name = product.name;
    imgUrl = product.imgUrls[0];
  }

  return (
    <>
      {product ? (
        // Image
        <div className="order-products-row__img-wrapper">
          <ImgLoader
            transform={"c_thumb,g_center,r_8,w_50,h_50"}
            src={imgUrl}
            alt={name}
            className="order-products-row__img"
          />
        </div>
      ) : (
        // Image placeholder
        <div className="orders-item__img-placeholder-container">
          <div className="orders-item__img-placeholder">
            <Icon icon={ic_image} size={"100%"} />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderProductItemImage;
