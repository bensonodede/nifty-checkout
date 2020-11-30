import React from "react";
import { useClipboard } from "use-clipboard-copy";

// Import components
import { Icon } from "react-icons-kit";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import { SuccessToast } from "components/toast";

const DomainDnsTable = () => {
  // Copy to clipboard hook
  const { copy, copied } = useClipboard({
    copiedTimeout: 1500, // timeout duration in milliseconds
  });

  return (
    <>
      {/*  */}
      <p className="has-text-grey-light">
        You're so close! This is the most challenging step but we know you got
        this!{" "}
        <span role="img" aria-label={"emoji"}>
          💪
        </span>{" "}
        <br />
        <br />
        Click on "add record".
        <br />
        Then enter the following values.
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

      {/*  */}
      <h5 className="is-marginless is-size-6">Feeling stuck?</h5>
      <p className="has-text-grey-light is-marginless">
        Don't pull your hair out.{" "}
        <span
          onClick={() => (window.location.href = "https://wa.me/254747645546")}
          className="has-text-primary domain-dns__table-help-text"
        >
          We're here to help.
        </span>
      </p>

      {/* Success toast on copied */}
      {copied && <SuccessToast text={"Value copied"} emoji={"👍"} />}
    </>
  );
};

export default DomainDnsTable;
