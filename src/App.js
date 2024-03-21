import React from "react";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Layout from "./components/layout/Layout";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <div>
      <Layout>
        <SignUp />
        <Login />
      </Layout>
    </div>
  );
};

export default App;
