import React from "react";

// Import components
import OptionsPopover from "../optionsPopover";
import { Icon } from "react-icons-kit";
import { ic_more_horiz } from "react-icons-kit/md/ic_more_horiz";

// Import hooks
import { usePopover } from "../../../popover";

const OptionsDesktop = () => {
  // Destructure hooks
  const [show, togglePopover] = usePopover(false);

  return (
    <OptionsPopover show={show} onClickOutside={togglePopover}>
      <div onClick={togglePopover} className="product-item__icon-container">
        <div className="product-item__icon">
          <Icon icon={ic_more_horiz} size={"100%"} />
        </div>
      </div>
    </OptionsPopover>
  );
};
export default OptionsDesktop;
