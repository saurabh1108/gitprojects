
import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Increase from "./Component/Increase.jsx";
// import Less from "./Component/Less.jsx";
// import Clear from "./Component/Clear.jsx";
ReactDom.render(


  <>
  <App/> 
  <Increase/>
  </>
,document.getElementById('root'))