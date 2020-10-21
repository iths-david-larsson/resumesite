import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
    height: 45%;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.1s ease;
    cursor: pointer;
    &:hover {
        padding: 2px 0;
    }
    span {
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background-color: white;
        margin: 0;
        box-sizing: border-box;
    }
`;

const NavIcon = ({ clickHandler }) => {
    let [rotate, setRotate] = useState(false);
    function rotateNav() {
        setRotate(!rotate);
    }
    return (
        <Nav
            onClick={() => {
                clickHandler();
                rotateNav();
            }}
            className={rotate ? "spin" : ""}
        >
            <span></span>
            <span></span>
            <span></span>
        </Nav>
    );
};
export default NavIcon;
