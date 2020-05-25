import React from "react";
import { useEffect, useState } from "react";
import Header from './components/Header';
import Banner from './components/Banner';
import PropertyHeader from './components/PropertyHeader';
import DetailsTable from './components/DetailsTable';
import Location from './components/Location';
import Description from './components/Description';
import Policies from './components/Policies';
import Footer from './components/Footer';
import "./styles/styles.scss";

function App() {
  const fixedText = "I am fixed :)";
  const whenNotFixed = "I am not a fixed header :(";
  const [headerText, setHeaderText] = useState(whenNotFixed);
  useEffect(() => {
    const header = document.getElementById("fixedHeader");
    const main = document.getElementById("main");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        main.classList.add("sticky");
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        main.classList.remove("sticky");
        if (headerText !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <main className="main" id="main">
        <div className="container">
            <Header/>
            <Banner/>
            <PropertyHeader/>
            <DetailsTable/>
            <Location/>
            <Description/>
            <Policies/>
        </div>
        <Footer/>
    </main>
  );
}

export default App;
