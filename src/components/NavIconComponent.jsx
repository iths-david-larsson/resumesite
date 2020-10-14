import React from 'react';
import styled from "styled-components";

const Nav = styled.div`
height: 45%;
width: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0;
box-sizing: border-box;
span {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: white;
    margin: 0;
    box-sizing: border-box;
}
`

const NavIcon = ({clickHandler}) => {

    return (<Nav onClick={clickHandler}>
        <span></span>
        <span></span>
        <span></span>
        </Nav>)
}
export default  NavIcon