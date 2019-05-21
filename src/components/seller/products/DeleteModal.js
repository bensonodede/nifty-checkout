import React from "react";
// import { Mutation } from "react-apollo";
import { BottomModal } from "../../modal";

//
import "./styles.css";

const DeleteModal = props => {
  let { name, id } = props.location.state;
  // let { storeName } = props.match.params;

  return (
    <BottomModal {...props.history}>
      <div>
        <div>
          <p>{name}</p>
          <p>{id}</p>
        </div>

        {/* Delete confirmation text */}
        <div>
          <p>Are you sure you want to delete this product?</p>
        </div>

        {/* Button row */}
        <div>
          {/* Delete button */}
          {/* <Mutation mutation={""}> */}
          <div>
            <p>Delete</p>
          </div>
          {/* </Mutation> */}

          {/* Cancel button */}
          <div onClick={props.history.goBack}>
            <p>Cancel</p>
          </div>
        </div>
        {/* End button row */}
      </div>
    </BottomModal>
  );
};
export default DeleteModal;
