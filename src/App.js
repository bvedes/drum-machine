import React from "react";
import Drum from "./components/Drum";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Drum />
      <Footer />
    </div>
  );
}

export default App;
