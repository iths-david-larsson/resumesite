import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DefaultForm from "../components/Form";
import SocialMedia from "../components/SocialMediaComponent";
const Nav = styled.div`
    position: absolute;
    top: 4rem;
    right: 0;
    width: 0%;
    height: 100vh;
    transition: all 0.5s ease;
    overflow: hidden;
    z-index: 99;
    .shade {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
    }
`;
const Slide = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    height: 100%;
    width: 0%;
    background-color: rgba(24, 24, 24, 0.5);
    transition: all 0.5s ease;

    .nav-content {
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 4rem 4rem;
        .sm-wrap {
            margin-top: 2rem;
            width: 20%;
        }
        a {
            text-decoration: none;
            width: 200px;
            color: white;
            box-sizing: border-box;
            padding: 0.5rem;
            @media screen and (max-width: 560px) {
                padding: 1rem;
            }

            p {
                box-sizing: border-box;
                font-size: 1.5rem;
                color: white;
                width: 100%;
                margin: 0;
            }
        }
    }
`;

const SlideNav = ({ menuState, setMenuState }) => {
    useEffect(() => {
        function checkMobile() {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        checkMobile();
    }, []);
    function handleShadeClick() {
        setMenuState(false);
    }
    let [isMobile, setIsMobile] = useState(false);
    return (
        <Nav className={menuState ? "show-shade" : ""}>
            <div className="shade" onClick={handleShadeClick}></div>
            <Slide className={menuState ? "show-nav" : ""}>
                <section className="nav-content">
                    <a href="#hero-section" onClick={handleShadeClick}>
                        <p>home</p>
                    </a>
                    <a href="#story-section" onClick={handleShadeClick}>
                        <p>my story</p>
                    </a>
                    <a href="#experience-section" onClick={handleShadeClick}>
                        <p>experience</p>
                    </a>
                    <a href="#contact-section" onClick={handleShadeClick}>
                        <p>contact</p>
                    </a>
                    {isMobile ? "" : <DefaultForm className="form" />}

                    <div className="sm-wrap">
                        <SocialMedia></SocialMedia>
                    </div>
                </section>
            </Slide>
        </Nav>
    );
};

export default SlideNav;
