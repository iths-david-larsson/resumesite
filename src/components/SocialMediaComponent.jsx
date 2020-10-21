import React from "react";
import styled from "styled-components";
import Instagram from "../imgs/instagram.svg";
import Facebook from "../imgs/facebook.svg";
import Linkedin from "../imgs/linkedin.svg";

const SocialMedia = () => {
    return (
        <SocWrap>
            <a href="https://www.instagram.com/baslarsa/" target="_blank">
                <img src={Instagram} alt="Insta-icon" className="socIcon" />
            </a>
            <a href="https://www.facebook.com/davelars" target="_blank">
                <img src={Facebook} alt="Facebook-icon" className="socIcon" />
            </a>
            <a href="https://www.linkedin.com/in/baslarsa/" target="_blank">
                <img src={Linkedin} alt="Linkedin-icon" className="socIcon" />
            </a>
        </SocWrap>
    );
};

export default SocialMedia;

const SocWrap = styled.div`
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    a {
        padding: 0 !important;
    }
    .socIcon {
        height: 40px;
        width: 40px;
        margin: 0 0.5rem;
    }
`;
