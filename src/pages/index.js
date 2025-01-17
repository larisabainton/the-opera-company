import React from "react";
import "../style/main.scss";
import Layout from "../components/Layout";
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>The Opera Company</title>