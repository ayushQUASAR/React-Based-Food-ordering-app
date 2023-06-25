import React from "react";
import Layout from "../components/Layouts/Layout";
import Slider from "./Slider";
import Contentcard from "./Content_card";
import Testimony from './Testimony'
import Top from './Top'
const Home = () => {

  return (
    <>
      <Layout>
       
        < Slider/>
        <Contentcard/>
   
         <Top/>
         <Testimony/>
      </Layout>
    </>
  );
};

export default Home;
