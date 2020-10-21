import React, { useState } from "react";
import "./App.scss";
import SiteLogo from "./components/SiteLogo";
import NavIcon from "./components/NavIconComponent";
import SlideNav from "./components/SlideNavComponent";
import bgSweep from "./imgs/background-sweeps.svg";
import Story from "./components/MyStory";
import Experience from "./components/MyExperience";
import HeroImg from "./components/HeroImgComponent";
import ScrollArrow from "./components/Scroll";
import Skills from "./components/SkillsComponent";
import Button from "./components/MainButton";
import DefaultForm from "./components/Form";
import ContactSvg from "./imgs/contact.svg";
import UpLogo from "./imgs/Up.svg";
import SocialMedia from "./components/SocialMediaComponent";
import Slide from "react-reveal";

function App() {
    let [navState, setNavState] = useState(false);
    function handleNavClick() {
        setNavState(navState ? false : true);
        document.body.style.position = () => (navState ? "fixed" : "initial");
    }

    return (
        <div
            className="App"
            style={navState ? { position: "fixed" } : { position: "initial" }}
        >
            <header className="flex-column align-center">
                <div className="content-standard full-size flex-row space-between align-center">
                    <SiteLogo />
                    <NavIcon click={navState} clickHandler={handleNavClick} />
                    <SlideNav menuState={navState} setMenuState={setNavState} />
                </div>
            </header>
            <section id="hero-section">
                <div className="hero flex-column align-center justify-center">
                    <div className="hero-wrap content-standard flex-row justify-center">
                        <Slide left>
                            <div className="heroText">
                                <h1>david</h1>
                                <h1>larsson</h1>
                                <h2>frontend-dev to be</h2>
                                <p>
                                    Welcome to my site. This is a little
                                    compressed version of me, my story and my
                                    skills. Well, at least how I look at it.
                                    Feel free to contact me with any questions.
                                </p>
                                {window.innerWidth > 768 ? (
                                    <Button
                                        target="#contact-section"
                                        class="align-self-center"
                                    >
                                        contact me
                                    </Button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </Slide>
                        <div className="heroImg" data-inviewanimation>
                            <Slide right>
                                <HeroImg />
                            </Slide>
                        </div>
                        <div className="heroBg">
                            <img
                                className="bgSweep"
                                src={bgSweep}
                                alt="background illustration"
                            />
                        </div>
                    </div>
                    <ScrollArrow />
                </div>
            </section>
            <section id="story-section">
                <Story />
            </section>
            <section
                className="experience flex-column justify-center align-center"
                id="experience-section"
            >
                <div className="heroBgTwo">
                    <img
                        className="bgSweepTwo"
                        src={bgSweep}
                        alt="background illustration"
                    />
                </div>

                <article className="exp-container content-standard flex-row justify-center align-start">
                    <Experience
                        title="education"
                        size="small"
                        dbCollection="education"
                        textAlign="left"
                    />
                    <Experience
                        title="experience"
                        size="big"
                        textAlign="right"
                        dbCollection="experience"
                    />
                </article>
            </section>
            <section
                id="skill-section"
                className="skills flex-column justify-center align-center"
            >
                <article className="content-standard">
                    <div>
                        <h1>skills.</h1>
                        <h2 className="text-left">coding skills.</h2>
                    </div>
                    <Skills dbCollection="skills" />
                </article>
                <article className="content-standard">
                    <div>
                        <h2 className="text-right">other skills.</h2>
                    </div>
                    <Skills dbCollection="otherskills" />
                </article>
            </section>
            <section
                id="contact-section"
                className="contact-section flex-column justify-center align-center"
            >
                <div className="heroBg">
                    <img
                        className="bgSweep"
                        src={bgSweep}
                        alt="background illustration"
                    />
                </div>
                <div className="contact-svg">
                    <img src={ContactSvg} alt="contact illustration"></img>
                </div>
                <article className="outer-wrap content-standard flex-row">
                    <Slide left>
                        <div className="contact-info">
                            <h1>contact.</h1>
                            <p>
                                feel free to contact me with any questions or if
                                you find me as a suitable fit for your team. I’m
                                open for every opportunity I can get.
                            </p>
                            <div className="address">
                                <p>
                                    <strong>Address: </strong>
                                    <br />
                                    Gamla Enköpingsvägen 130B
                                    <br />
                                    17461 Sundbyberg
                                    <br />
                                    <strong>Phone: </strong>
                                    <br />
                                    +46(0)73 841 14 54
                                    <br />
                                    <strong>e-mail: </strong>
                                    <br />
                                    <a href="mailto:davvelars@gmail.com">
                                        davvelars@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="form-wrapper">
                            <DefaultForm />
                        </div>
                    </Slide>
                </article>
            </section>
            <footer className="flex-row justify-center">
                <article className="content-standard">
                    <div className="footer-content">
                        <div className="footer-inner">
                            <SiteLogo />
                        </div>
                        <div className="footer-inner">
                            <a href="#hero-section">
                                <img
                                    src={UpLogo}
                                    alt="up-logo"
                                    className="up-icon"
                                />
                            </a>
                        </div>
                        <div className="footer-inner">
                            <SocialMedia />
                        </div>
                    </div>
                </article>
            </footer>
        </div>
    );
}

export default App;
