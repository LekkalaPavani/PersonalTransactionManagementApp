import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login, { LoginRouter } from "./Component/Login/index.js";
import { useState } from "react";
import Dashboard from "./Component/Dashboard/index";
import Transactions from "./Component/Transactions/index";
import Profile from "./Component/Profile/index";
import ProtectedRoute from "./Component/ProtectedRoute/index.js";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginRouter />} />
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
