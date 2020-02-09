import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import CreateStoreFooter from "../CreateStoreFooter";
import PayoutMethod from "./PayoutMethod";
import PayoutNumber from "./PayoutNumber";

const PayoutField = ({ payoutMethod, isValid, history }) => (
  <>
    {/* Payout method */}
    <PayoutMethod />

    {/* Payout number*/}
    <PayoutNumber payoutMethod={payoutMethod} />

    {/* Phone number footer */}
    <CreateStoreFooter
      isDisabled={!isValid}
      type={"button"}
      onClick={() => history.push("/create-store/policy")}
    />
  </>
);

export default withRouter(PayoutField);
