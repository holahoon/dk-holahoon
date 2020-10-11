import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "containers/Navigation";
import { LanguageContext } from "hooks/LanguageContext";
import Layout from "layout/Layout";
import AppRouter from "containers/Router";
import Footer from "containers/Footer";

import "./style/main.scss";

// const works = ["work1", "work2", "work3"];

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <LanguageContext.Provider
        value={{
          languageHandler: [language, setLanguage],
        }}
      >
        <Layout>
          <Router>
            <Navigation />
            <AppRouter />
            <Footer />
          </Router>
        </Layout>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
