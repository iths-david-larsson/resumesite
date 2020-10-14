import React from "react";
import '../App.scss'
import styled from 'styled-components';

const Logo = styled.div`
height: 70%;
margin: 0;
display: flex;
flex-direction: row;
align-items: center;

svg {
    height: 100%;
    margin-right: 1rem;
}

.logotype-name {
    border-left: 2px solid white;
    height: 100%;
    box-sizing: border-box;
    padding: 0 0 0 1rem;
    color: white;
    margin: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    
    p {
        margin: 0;
        padding: 0;
        font-family: 'Tungsten', 'Helvetica Neue';
        font-size: 1.2rem;
        letter-spacing: 10px;
    }
}
`
function SiteLogo() {
    return (
        <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.78 60.003">
                <g id="DL-Logo" transform="translate(-6.777 -7.423)">
                    <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M52.758,22.86a5.254,5.254,0,0,1-2.661,4.6L20.2,44.734l-7.584,4.378-4.63,2.674a5.326,5.326,0,0,1-6.453-.865A5.241,5.241,0,0,1,0,47.183V4.125H7.558v38.68a.754.754,0,0,0,.226.532.738.738,0,0,0,.891.106l3.939-2.275L20.2,36.791,43.124,23.551a.735.735,0,0,0,.373-.639.724.724,0,0,0-.213-.519.625.625,0,0,0-.16-.12L20.2,9.035v27.1l-7.584,4.378V4.657A4.645,4.645,0,0,1,19.586.625L20.2.971,50.11,18.242a5.611,5.611,0,0,1,1.171.9A5.344,5.344,0,0,1,52.758,22.86Z"
                        transform="translate(6.777 7.423)"
                        fill="#fff"
                    />
                    <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M136.88,250.28l-34.6,19.932-.6.346a4.658,4.658,0,0,1-6.986-4.032v-5.562l7.584-4.378v2.981a1,1,0,0,0,1.5.865L133.021,243.6Z"
                        transform="translate(-75.322 -203.764)"
                        fill="#fff"
                    />
                </g>
            </svg>
            <div className="logotype-name">
                <p>DAVID</p>
                <p>LARSSON</p>
            </div>
        </Logo>
    );
}

export default SiteLogo;
