import React, { useEffect, useState } from "react";
import firebase from "firebase";
import styled from "styled-components";
import "../App.scss";
import ListItem from "./CvListItem";
import Slide from "react-reveal";
var config = {
    apiKey: "AIzaSyB6qjcGgfkkMg4Ct4q1kkiQG3a_KZr2Xjs",
    authDomain: "davids-resumesite.firebaseapp.com",
    databaseURL: "https://davids-resumesite.firebaseio.com/",
    storageBucket: "bucket.appspot.com",
    projectId: "davids-resumesite",
};
firebase.initializeApp(config);

const db = firebase.firestore();

const Experience = (props) => {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        //Get CV-data from database
        const fetchData = async () => {
            const data = await db.collection(`${props.dbCollection}`).get();
            setSchools(data.docs.map((doc) => doc.data()));
        };
        fetchData();
    }, []);
    //sort data to the right order
    const newData = schools.sort(function (a, b) {
        return a.sorting - b.sorting;
    });
    let [showDesc, setShowDesc] = useState(false);
    function handleClick() {
        setShowDesc(!showDesc);
    }

    return (
        <Container>
            <Slide bottom cascade>
                <div className="title">
                    <h1 className={props.textAlign}>{props.title}</h1>
                </div>
            </Slide>
            <ul>
                {newData.map((school) => (
                    <ListItem key={school.name} schoolData={school} />
                ))}
            </ul>
        </Container>
    );
};

export default Experience;

//Styled component
let Container = styled.article`
    width: 50%;
    color: white;
    padding: 0;
    overflow: hidden;
    padding-bottom: 5rem;
    h1 {
        font-size: 50px;
        margin: 0;
    }
    .left {
        text-align: left;
    }
    .right {
        text-align: right;
    }
    @media screen and (max-width: 560px) {
        width: 100%;
    }
    ul {
        padding: 0;
        list-style-type: none;
        text-align: left;
    }
`;
