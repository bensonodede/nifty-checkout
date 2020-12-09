import React from "react";
import { useClipboard } from "use-clipboard-copy";

// Import components
import DomainDnsStepsItem from "./DomainDnsStepsItem";

// Import components
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import { SuccessToast } from "components/toast";

const DomainDnsStepThree = () => {
  // Copy to clipboard hook
  const { copy, copied } = useClipboard({
    copiedTimeout: 1500, // timeout duration in milliseconds
  });

  return (
    <DomainDnsStepsItem number={3} title={"Create a record"}>
      {/* Description */}
      <p className="has-text-grey-light">
        You're so close! This is the most challenging step but we know you got
        this!{" "}
        <span role="img" aria-label={"emoji"}>
          💪
        </span>
      </p>

      {/* Bullet point 1 */}
      <p className="has-text-grey-light is-marginless">
        Click on <span className="title is-size-6">add new record.</span> Then
        enter the following values.
      </p>

      {/* A record table */}
      <table className="table is-fullwidth domain-dns__table">
        {/* Table header */}
        <thead>
          <tr>
            <th className="domain-dns__table-header-item">Type</th>
            <th className="domain-dns__table-header-item">Name</th>
            <th className="domain-dns__table-header-item">Value</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          <tr>
            <td className="has-text-grey-light">A</td>
            <td className="has-text-grey-light">@</td>
            <td onClick={() => copy("76.76.21.21")}>
              <div className="domain-dns__table-value">
                <h5 className="has-text-primary is-marginless is-size-6">
                  76.76.21.21{" "}
                </h5>

                <Icon
                  icon={ic_content_copy}
                  size={"100%"}
                  className="domain-dns__table-copy-icon"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Bullet point 2 */}
      <p className="has-text-grey-light is-marginless">
        Finally, save the A Record by clicking{" "}
        <span className="title is-size-6">Save.</span>
      </p>

      {/* Footer */}
      <p className="has-text-grey-light">
        Feeling stuck? Don't pull your hair out.{" "}
        <span
          onClick={() => (window.location.href = "https://wa.me/254747645546")}
          className="has-text-primary domain-dns__table-help-text is-size-6"
        >
          We're here to help.
        </span>
      </p>

      {/* Success toast on copied */}
      {copied && <SuccessToast text={"Value copied"} emoji={"👍"} />}
    </DomainDnsStepsItem>
  );
};

export default DomainDnsStepThree;
