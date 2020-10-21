import React, { useState } from "react";
import "../App.scss";
import styled from "styled-components";
import PlusSign from "../imgs/plus-sign.svg";
import MinusSign from "../imgs/minus-sign.svg";
import Slide from "react-reveal";

const ListItem = ({ schoolData }) => {
    let [desc, setDesc] = useState(false);
    function handleClick() {
        setDesc(!desc);
    }
    return (
        <ListItemBox onClick={handleClick}>
            <span></span>
            <div className="text">
                <div className="flex-row">
                    <p>{schoolData.year}</p>
                </div>
                <h3>{schoolData.course}</h3>
                <div>
                    <p>{schoolData.name + ", " + schoolData.city}</p>
                </div>
                <div className={desc ? "desc show" : "desc"}>
                    <p>{schoolData.desc}</p>
                </div>
            </div>
            <div className="expand">
                <img
                    src={desc ? MinusSign : PlusSign}
                    alt=""
                    className={desc ? "rotate" : ""}
                />
            </div>
        </ListItemBox>
    );
};

export default ListItem;

const ListItemBox = styled.li`
    cursor: pointer;
    margin: 1rem 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: white;
    color: black;
    position: relative;
    transition: all 0.2s ease;
    box-sizing: border-box;
    &:hover {
        -webkit-box-shadow: inset 1px 1px 0px 1px rgba(0, 0, 0, 1);
        -moz-box-shadow: inset 1px 1px 0px 1px rgba(0, 0, 0, 1);
        box-shadow: inset 1px 1px 0px 1px rgba(0, 0, 0, 1);
    }
    .text {
        cursor: pointer;
        display: flex;
        font-family: "Neue Montreal", "Helvetica Neue";
        flex-direction: column;
        padding: 0 1rem;
        width: 100%;
        h3 {
            margin: 0;
        }
        p {
            font-size: 0.8rem;
            margin: 0.2rem 0;
        }
    }
    span {
        display: flex;
        width: 6px;
        position: absolute;
        top: 0.5rem;
        bottom: 0.5rem;
        background: linear-gradient(
            357deg,
            rgba(162, 0, 222, 1) 0%,
            rgba(255, 138, 2, 1) 100%
        );
        border-radius: 3px;
        align-self: center;
    }
    .expand {
        cursor: pointer;
        width: 40px;
        height: 100%;
        min-height: 40px;
        display: flex;

        justify-content: center;
        align-items: center;
        img {
            width: 70%;
            transition: all 1s ease;
        }
        .rotate {
            animation: rotate 0.4s ease;
            @keyframes rotate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(180deg);
                }
            }
        }
    }
    .desc {
        max-height: 0;
        visibility: hidden;
        color: transparent;
        transition: all 0.2s cubic-bezier(0.27, 0.63, 0.37, 0.82);
    }
    .show {
        max-height: 300px;
        visibility: visible;
        color: black;
    }
`;
