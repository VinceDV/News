import React from "react";
import "./App.css";
import FetchComponent from "./components/FetchComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificArticle from "./components/SpecificArticle";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header mb-5">
          <h2>Ultime Notizie</h2>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <FetchComponent></FetchComponent>
              </Row>
            }
          ></Route>
          <Route path="/SpecificArticle" element={
            <SpecificArticle />
          }>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
