import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import https, { BaseUrl } from "../../services/http/https";
import { generateUniqueID, validateSlug } from "../../services/utiles/utiles";
import { useAuth } from "../../services/context/auth-context";

const AddLink = () => {
  const [data, setData] = useState({
    title: "",
    original: "",
    reduced: "",
  });
  const [loading, setLoading] = useState(false);
  const [nameAllow, setNameAllow] = useState(true);
  const [slugAllow, setSlugAllow] = useState(true);
  const [link, setLink] = useState({});
  const { user } = useAuth();
  const navigation = useNavigate();
  const { id } = useParams();

  const checkLinkName = async (name) => {
    if (name.trim() != "") {
      try {
        let response = await https.get(`/links/reduced/${name}`);
        if (response) {
          if(id && (link.reduced != response.data.reduced))
            setNameAllow(!Boolean(response.data.id));
          if(!id) 
            setNameAllow(!Boolean(response.data.id));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setNameAllow(true);
    }
  };

  const fetchLink = async () => {
    try {
      let response = await https.get(`/links/${id}`);
      if (response) {
        setData(response.data);
        setLink(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(id) fetchLink()
  }, [id])

  const handelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const changeLinkName = (e) => {
    let value = e.target.value;
    if (validateSlug(value)) {
      setSlugAllow(true);
      checkLinkName(value);
      setData({
        ...data,
        [e.target.name]: value,
      });
    } else {
      setSlugAllow(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    if(data.reduced.trim() == "") 
      data.reduced = generateUniqueID()

    if(nameAllow && slugAllow) {
      try {
        let response
        if(!id) {
          response = await https.post(`/links`, {
            ...data,
            uid: user.user.id
          });
        }
        else {
          response = await https.put(`/links`, {
            ...data,
            id
          });
        }
        if (response) {    
          setLoading(false)
          navigation("/home")
        }
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
  };

  return (
    <Layout>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-5">{id ? "Modifier le lien" : "Ajouter un lien"}</h4>
                  <form class="forms-sample" onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label for="exampleInputUsername1">Titre</label>
                      <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handelChange}
                        class="form-control"
                        id="exampleInputUsername1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputUsername1">Destination</label>
                      <input
                        type="url"
                        name="original"
                        value={data.original}
                        onChange={handelChange}
                        class="form-control"
                        required
                        id="exampleInputUsername1"
                        placeholder="https://example.com/votre-long-url"
                      />
                    </div>
                    <div class="row">
                      <div class="d-flex gap-2">
                        <div class="form-group" style={{ width: "100%" }}>
                          <label for="exampleInputEmail1">Domaine</label>
                          <input
                            type="text"
                            required
                            class="form-control"
                            id="exampleInputEmail1"
                            disabled
                            value={BaseUrl + "/"}
                          />
                        </div>
                        <div class="form-group" style={{ width: "100%" }}>
                          <label for="exampleInputEmail1">
                            Lien Customisable{" "}(optionnel)
                          </label>
                          <input
                            type="text"
                            name="reduced"
                            value={data.reduced}
                            placeholder="Ex: mon-site"
                            onChange={changeLinkName}
                            class="form-control"
                            id="exampleInputEmail1"
                          />

                          {!nameAllow && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              Ce lien est déja prise
                            </span>
                          )}
                          {!slugAllow && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              Vous ne pouvez pas mettre des espaces, ?, % et &
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {loading ? (
                      <button
                        type="submit"
                        disabled
                        class="btn btn-gradient-primary me-2"
                      >
                        Chargement...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!nameAllow}
                        class="btn btn-gradient-primary me-2"
                      >
                        Créer
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddLink;
