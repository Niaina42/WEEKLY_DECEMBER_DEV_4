import React, { useState } from "react";
import https, { BaseUrl } from "../../../services/http/https";
import { Link, useNavigate } from "react-router-dom";

const TableItem = ({ link, deleteCallback }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

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
          onClick={() => navigation(`/add-link/${link.id}`)}
        >
            Modifier
        </label>
      </td>
    </tr>
  );
};
export default TableItem;
