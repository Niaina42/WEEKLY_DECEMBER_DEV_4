import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import https from "../../services/http/https";
import { toFormData } from "axios";
import TableItem from "./TableItem/TableItem";
import { useAuth } from "../../services/context/auth-context";

const Qrcode = () => {
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigation = useNavigate();

  const fetchLinks = async () => {
    try {
      setLoading(true);
      let response = await https.get(`/links/with-qr/${user.user.id}`);
      if (response) {
        console.log(response.data)
        setLinks(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinks()
  }, []);

  return (
    <Layout>
      <div class="main-panel">
        <div class="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Vos QR codes</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th> Titre </th>
                          <th> Originale </th>
                          <th> Lien </th>
                          <th> Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading && (
                          <tr>
                            <td colSpan={4} className="text-center">
                              Chargement...
                            </td>
                          </tr>
                        )}
                        {!loading && links && links.length != 0 ? (
                          links.map((link, idx) => <TableItem key={idx} link={link} />)
                        ) : !loading && (
                          <tr>
                            <td colSpan={4} className="text-center">
                              Vous n'avez pas encore de fichier
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Qrcode;
