import React, { useState } from "react";
import { generateDate } from "../../../services/date/date";
import { toFormData } from "axios";
import https, { BaseUrl } from "../../../services/http/https";

const TableItem = ({ link, deleteCallback }) => {
  const [loading, setLoading] = useState(false);

  const deleteLink = async () => {
    try {
      setLoading(true);
      let response = await https.delete(`/links/${link.id}`);
      if (response) {
        setLoading(false);
        if (deleteCallback) deleteCallback();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <tr>
      <td> {link.title} </td>
      <td>
        <a href={link.original} target="_blank">
          {link.original}
        </a>
      </td>
      <td>
        <a href={BaseUrl + "/" + link.reduced} target="_blank">
          {" "}
          {BaseUrl}/{link.reduced}
        </a>
      </td>
      <td>
        {!loading ? (
          <label
            class="badge badge-danger"
            style={{ cursor: "pointer" }}
            onClick={deleteLink}
          >
            Supprimer
          </label>
        ) : (
          <label class="badge badge-warning">Chargement...</label>
        )}
        <label
          class="badge badge-success"
          style={{ marginLeft: 4, cursor: "pointer" }}
        >
          Modifier
        </label>
      </td>
    </tr>
  );
};
export default TableItem;
