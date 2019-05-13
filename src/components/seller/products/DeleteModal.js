import React from "react";
import { Mutation } from "react-apollo";

//
import "./styles.css";

const DeleteModal = props => (
  <div>
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
      <div>
        <p>Cancel</p>
      </div>
    </div>
    {/* End button row */}
  </div>
);

export default DeleteModal;
