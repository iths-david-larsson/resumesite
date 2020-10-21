import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return (
        <ButtonStyle href={props.target}>
            <p>{props.children}</p>
        </ButtonStyle>
    );
};

export default Button;

const ButtonStyle = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    max-width: 200px;
    margin: 2rem 0;
    border-radius: 0.2rem;
    position: relative;
    transition: all 0.3s ease;
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 100%;
        background: transparent;
        left: 0;
        z-index: -1;
        transition: all 0.3s ease;
    }
    &:hover {
        color: black;
        &:after {
            background: white;
            width: 100%;
        }
    }

    p {
        padding: 1rem;
    }
`;
