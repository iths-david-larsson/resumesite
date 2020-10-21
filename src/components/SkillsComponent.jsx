import React, { useEffect, useState } from "react";
import firebase from "firebase";
import styled from "styled-components";
import "../App.scss";
import Slide from "react-reveal";

const db = firebase.firestore();

const Skills = (props) => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        //Get CV-data from database
        const fetchData = async () => {
            const data = await db.collection(`${props.dbCollection}`).get();
            setSkills(data.docs.map((doc) => doc.data()));
        };
        fetchData();
    }, []);

    return (
        <>
            <Slide>
                <SkillContainer>
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            <div className="title">
                                <p>{skill.name}</p>
                            </div>
                            <div className="bar-container">
                                <span
                                    className="bar"
                                    style={{ width: skill.skill }}
                                ></span>
                            </div>
                        </li>
                    ))}
                </SkillContainer>
            </Slide>
        </>
    );
};

export default Skills;

const SkillContainer = styled.ul`
    list-style-type: none;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    flex-wrap: wrap;
    color: white;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
    }
    li {
        width: 49%;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        .title {
        }
        .bar-container {
            width: 80%;
            height: 20px;
            position: relative;
            border-bottom: 1px solid white;
            @media screen and (max-width: 768px) {
                width: 60%;
            }
            .bar {
                position: absolute;
                left: 0;
                background: linear-gradient(
                    -90deg,
                    rgba(194, 85, 23, 0.9) 0%,
                    rgba(193, 78, 12, 0.7) 100%
                );
                width: 0%;
                height: 100%;
            }
        }
    }
`;
