import React from "react";
import NavBar from "./components/assets/NavBar";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import ViewEmployeePage from "./components/pages/ViewEmployeePage";
import FilterPage from "./components/pages/FilterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/assets/Footer";


import styled from "styled-components";

const Container = styled.div`
 width: 90%;
margin: 0 auto;
`
export default function App() {
  return (
 
    <Router>
      <header>
        <NavBar />
      </header>
      <Container>
         <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/employeers" element={<ViewEmployeePage />}></Route>
          <Route path="/employees/filter" element={<FilterPage />}></Route>
        </Routes>
      </main>
      </Container>
   
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

// // "proxy": "http://localhost:5000",
