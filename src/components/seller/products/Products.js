import React, { Component } from "react";

// Import components
import ProductPage from "./ProductPage";
import OptionsModal from "./OptionsModal";
import DeleteModal from "./DeleteModal";

class Products extends Component {
  render() {
    return (
      <div>
        <ProductPage
          renderOptionsModal={({
            optionsVisible,
            optionsAnimate,
            toggleModal,
            toggleDeleteModal,
            item
          }) => (
            <OptionsModal
              visible={optionsVisible}
              animate={optionsAnimate}
              toggleModal={toggleModal}
              toggleDeleteModal={toggleDeleteModal}
              item={item}
            />
          )}
          renderDeleteModal={({
            deleteVisible,
            deleteAnimate,
            toggleModal,
            item
          }) => (
            <DeleteModal
              visible={deleteVisible}
              animate={deleteAnimate}
              toggleModal={toggleModal}
              item={item}
            />
          )}
        />
      </div>
    );
  }
}

export default Products;
