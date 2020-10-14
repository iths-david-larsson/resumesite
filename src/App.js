import React, { useState }from 'react';
import './App.scss';
import SiteLogo from "./components/SiteLogo";
import NavIcon from "./components/NavIconComponent";
import SlideNav from "./components/SlideNavComponent";
import HeroSvg from "./imgs/frontendIllustration.svg";
import bgSweep from "./imgs/background-sweeps.svg";
function App() {
  let [navState, setNavState] = useState(false)
    function handleNavClick() {
    setNavState(
      (navState ? false : true)
    )
      document.body.style.position = () => navState ? "fixed" : "initial";

  }
  return (
    <div className="App">
      <header className="flex-column align-center">
        <div className="content-standard full-size flex-row space-between align-center">
          <SiteLogo />
          <NavIcon clickHandler={handleNavClick} />
          <SlideNav menuState={navState} setMenuState={setNavState}/>
        </div>
      </header>
      <section>
        <div className="hero flex-column align-center justify-center">
          <div className="content-standard flex-row">
            <div className="heroText">
              <h1>david</h1>
              <h1>larsson</h1>
              <h2>frontend-dev to be</h2>
              </div>
            <div className="heroImg">
              <img  className="frontendSvg" src={HeroSvg}/>
            </div>
            <div className="heroBg">
            <img  className="bgSweep" src={bgSweep}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
