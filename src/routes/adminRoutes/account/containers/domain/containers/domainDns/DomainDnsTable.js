import React from "react";

const DomainDnsTable = () => (
  <>
    <p className="has-text-grey-light">
      Set the following settings on your domain provider. (
      <span className="has-text-primary">Need help?</span>)
    </p>

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
          <td className="has-text-primary">76.76.21.21</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default DomainDnsTable;
