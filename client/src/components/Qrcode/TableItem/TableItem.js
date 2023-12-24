import React, { useState } from "react";
import https, { BaseUrl } from "../../../services/http/https";
import CustomModal from "../QrModal/QrModal";

const TableItem = ({ link }) => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <tr>
      <td> {link.title} </td>
      <td>
        <a href={link.original} target="_blank">
          {link.original.slice(0, 20)}...
        </a>
      </td>
      <td>
        <a href={BaseUrl + "/" + link.reduced} target="_blank">
          {" "}
          {BaseUrl}/{link.reduced}
        </a>
      </td>
      <td>
        <label
          class="badge badge-success"
          style={{ marginLeft: 4, cursor: "pointer" }}
          onClick={() => setShow(true)}
        >
            Afficher QR
        </label>
      </td>
      <CustomModal show={show} setShow={setShow} link={link} />
    </tr>
  );
};
export default TableItem;
