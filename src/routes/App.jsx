import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "../containers/MainPage";
import Layout from "../components/Layout";
import "../assets/styles/index.css";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";

const App = () => {
    return(
        <>
            <Layout>
                <MainPage/>    
            </Layout>  
        </>
    );
};
    
      
export default App;