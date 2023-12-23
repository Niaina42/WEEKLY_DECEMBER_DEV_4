import React, { useState } from "react";
import { generateDate } from "../../../services/date/date";
import { toFormData } from "axios";
import https, { BaseUrl } from "../../../services/http/https";

const TableItem = ({ file, deleteCallback }) => {
  const [loading, setLoading] = useState(false);
  const fileUrl = BaseUrl + file.path;
  const name = file.path.replace("/public/", "");

  const deleteFile = async () => {
    try {
      setLoading(true);
      let formData = toFormData({ id: file.id, path: file.path });
      let response = await https.post("/files/delete", formData);
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
      <td> {file.name} </td>
      <td> {generateDate(file.createdAt)} </td>
      <td>
        {!loading ? (
          <label
            class="badge badge-danger"
            style={{ cursor: "pointer" }}
            onClick={deleteFile}
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
          Telecharger
        </label>
      </td>
    </tr>
  );
};
export default TableItem;
