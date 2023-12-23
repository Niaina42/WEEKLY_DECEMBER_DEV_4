import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import https from "../../services/http/https";
import { toFormData } from "axios";
import TableItem from "./TableItem/TableItem";
import { useAuth } from "../../services/context/auth-context";

const Home = () => {
  const [folder, setFolder] = useState(null);
  const [loading, setLoading] = useState(false);
  const { folder_id } = useParams();
  const { user } = useAuth();
  const navigation = useNavigate();

  const fetchFile = async () => {
    try {
      let formData = toFormData({ uid: user.user.id });
      let response = await https.post("/folders/user", formData);
      if (response) {
        navigation(`/home/${response.data[0].id}`)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFolder = async () => {
    try {
      setLoading(true);
      let formData = toFormData({ folder_id });
      let response = await https.post("/folders/one", formData);
      if (response) {
        setFolder(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(folder_id) {
      fetchFolder()
    } else {
      fetchFile()
    }
  }, [folder_id]);

  return (
    <Layout>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">{folder && folder.name}</h3>
            <h3 class="page-title">
              <Link to={`/add-link`} className="btn btn-block btn-lg btn-gradient-primary">
                + Créer un lien
              </Link>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Vos Liens</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th> Nom </th>
                          <th> Date creation </th>
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
                        {!loading && folder && folder.files.length != 0 ? (
                          folder.files.map((file, idx) => <TableItem key={idx} file={file} deleteCallback={fetchFolder}/>)
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

export default Home;
