import React from 'react';
import styled from "styled-components";


const Nav = styled.div`
    position: absolute;
    top: 4rem;
    left: 0;
    width: 0%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    transition: all 0.5s ease;
`
const Slide = styled.div`
position: absolute;
top: 0;
right: 0;
height: 100%;
width: 0%;
background: black;
transition: all 0.7s ease;
`

const SlideNav = ({menuState, setMenuState}) => {

    return (
        <Nav className={menuState ? "show-shade" : ""}>
            <Slide className={menuState ? "show-nav" : ""}></Slide>
        </Nav>
)
}

export default SlideNav;