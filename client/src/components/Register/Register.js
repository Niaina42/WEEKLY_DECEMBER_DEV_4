import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import https from "../../services/http/https";
import { setAuthToken } from "../../services/token/token";
import { useAuth } from "../../services/context/auth-context";

const Register = () => {
  let initial = {
    name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initial);
  const { signup } = useAuth();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await signup(data);
      if (response) {
        setLoading(false);
        navigation("/home");
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };
  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <span className="logo-title">Link Reducer</span>
                </div>
                <h4>Nouveau ici?</h4>
                <h6 class="font-weight-light">
                  L'inscription est simple. Cela ne prend que quelques seconde
                </h6>
                <form class="pt-3" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="exampleInputUsername1"
                      name="name"
                      onChange={handleChange}
                      placeholder="Nom"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="exampleInputUsername1"
                      name="last_name"
                      onChange={handleChange}
                      placeholder="Prenom"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      id="exampleInputEmail1"
                      name="email"
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      name="password"
                      onChange={handleChange}
                      id="exampleInputPassword1"
                      placeholder="Mot de passe"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    {error && (
                      <div className="alert alert-danger mt-2" role="alert">
                        Une érreur s'est produite.
                      </div>
                    )}
                  </div>
                  <div class="mt-3">
                    <button
                      class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      type="submit"
                    >
                      {loading ? "Chargement..." : "S'INSCRIRE"}
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    {" "}
                    Vous avez déjà un compte?{" "}
                    <Link to="/" class="text-primary">
                      Se connecter
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
