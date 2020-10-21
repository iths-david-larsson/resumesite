import React from 'react';
import styled from "styled-components";



const ScrollArrow = () => {
    return ( 
        <ArrowBox id="wrapper">
            <div id="wrapper-inner">
                <div id="scroll-down">
                    <span className="arrow-down"></span>
                    <span id="scroll-title">Scroll down</span>
                </div>
            </div>
        </ArrowBox>
    );
}

export default ScrollArrow;


let ArrowBox = styled.div`
    display: table;
    width: 100px;
    height: 50px;
    padding: 0;
    position: absolute;
    bottom: 1rem;
    right: 1rem;



#wrapper-inner {
    padding: 0;
    display: table-cell;
    vertical-align: bottom;
    width: 100%;
    height: 100%;
}

#scroll-down {
    display: block;
    position: relative;
    padding-top: 79px;
    text-align: center;
    @media screen and (max-width: 768px) {
        transform: translateY(-20px);
    }
}
.arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 38px;
}
.arrow-down:after {
    content: "";
    display: block;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 8px;
    border-top: 2px solid #A95F35;
    border-right: 2px solid #A95F35;
    transform: rotate(135deg);
}
#scroll-title {
    display: block;
    text-transform: uppercase;
    color: white;
    font-family: Helvetica Neue, Helvetica, Arial;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1em;
}
#scroll-down::before {
    animation: elasticus 2.2s cubic-bezier(1, 0, 0, 1) infinite;
    /* IE 10+, Fx 29+ */

    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 90px;
    background: #A95F35;
    content: " ";
}
@-webkit-keyframes elasticus {
    0% {
        transform-origin: 0% 0%;

        transform: scale(1, 0);
    }
    50% {
        transform-origin: 0% 0%;

        transform: scale(1, 1);
    }
    50.1% {
        transform-origin: 0% 100%;

        transform: scale(1, 1);
    }
    100% {
        transform-origin: 0% 100%;

        transform: scale(1, 0);
    }
}
@-moz-keyframes elasticus {
    0% {
        transform-origin: 0% 0%;

        transform: scale(1, 0);
    }
    50% {
        transform-origin: 0% 0%;

        transform: scale(1, 1);
    }
    50.1% {
        transform-origin: 0% 100%;

        transform: scale(1, 1);
    }
    100% {
        transform-origin: 0% 100%;

        transform: scale(1, 0);
    }
}
@-o-keyframes elasticus {
    0% {
        transform-origin: 0% 0%;

        transform: scale(1, 0);
    }
    50% {
        transform-origin: 0% 0%;

        transform: scale(1, 1);
    }
    50.1% {
        transform-origin: 0% 100%;

        transform: scale(1, 1);
    }
    100% {
        transform-origin: 0% 100%;

        transform: scale(1, 0);
    }
}
@keyframes elasticus {
    0% {
        transform-origin: 0% 0%;

        transform: scale(1, 0);
    }
    50% {
        transform-origin: 0% 0%;

        transform: scale(1, 1);
    }
    50.1% {
        transform-origin: 0% 100%;

        transform: scale(1, 1);
    }
    100% {
        transform-origin: 0% 100%;

        transform: scale(1, 0);
    }
}

`