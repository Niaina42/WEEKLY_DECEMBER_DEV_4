import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ProtectedRoute from "../services/pageGuard/ProtectedRoute";
import RedirectRoute from "../services/pageGuard/RedirectRoute";
import AddLink from "../components/AddLink/AddLink";
import Qrcode from "../components/Qrcode/Qrcode";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-link"
          element={
            <ProtectedRoute>
              <AddLink />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-link/:id"
          element={
            <ProtectedRoute>
              <AddLink />
            </ProtectedRoute>
          }
        />
        <Route
          path="/qr-codes"
          element={
            <ProtectedRoute>
              <Qrcode />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectRoute>
              <Register />
            </RedirectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
