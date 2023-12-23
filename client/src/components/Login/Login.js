import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import https from "../../services/http/https";
import { setAuthToken } from "../../services/token/token";
import { useAuth } from "../../services/context/auth-context";

const Login = () => {
  let initial = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initial);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const { login } = useAuth();
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
      let response = await login(data);
      if (response) {
        setLoading(false);
        navigation("/home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response.data);
    }
  };
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="brand-logo">
                  <span className="logo-title">Link Reducer</span>
                </div>
                <h4>Bonjour, Commençons l'aventure</h4>
                <h6 className="font-weight-light">
                  Connectez-vous pour continuer.
                </h6>
                <form className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
                      {loading ? "Chargement..." : "CONNEXION"}
                    </button>
                  </div>
                  {error && (
                    <div className="alert alert-danger mt-2" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="text-center mt-4 font-weight-light">
                    {" "}
                    Vous n'avez pas de compte ?{" "}
                    <Link to="/register" className="text-primary">
                      Créer
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
export default Login;
