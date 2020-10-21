import React from "react";
import humanIllu from "../imgs/human_profile.svg";
import codeIllu from "../imgs/code_development.svg";
import composeIllu from "../imgs/compose_music.svg";
import Fade from "react-reveal";

const Story = () => {
    return (
        <>
            <section className="flex-column justify-center align-center">
                <div className="content-standard myStory">
                    <Fade>
                        <h1>my story.</h1>
                    </Fade>
                    <article>
                        <Fade>
                            <div className="img-wrapper">
                                <div className="grid-container">
                                    <img
                                        alt="background illustration"
                                        className="img1"
                                        src={humanIllu}
                                    ></img>
                                    <img
                                        alt="background illustration"
                                        className="img2"
                                        src={codeIllu}
                                    ></img>
                                    <img
                                        alt="background illustration"
                                        className="img3"
                                        src={composeIllu}
                                    ></img>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="main-text">
                                <strong>
                                    Born 1990 and raised in Fagersta 2h from
                                    Stockholm.
                                </strong>
                                <p>
                                    Started out as a dreamer with a vision of
                                    becoming a hockey star. I spent most of my
                                    younger years chasing this dream. When I
                                    grew older I found out that my wardrobe
                                    contained another set of clothes – a
                                    creative suit.
                                </p>
                                <p>
                                    This became my next chapter in life. I
                                    started to find motivation in music and the
                                    creative process behind it. In 2015 after a
                                    few years as a working class hero at the
                                    local metal industry, I got accepted to one
                                    of the most renowned songwriting and
                                    music-production schools in Sweden. Maybe
                                    the world. From this day I left my hometown
                                    permanently. I got quite good att music and
                                    spent a couple of years freelancing the
                                    music biz. Writing songs for big artists
                                    such as Felix Sandman and Molly Hammar. In
                                    2019 I made the desicion to put the music
                                    aside – I didn’t find it as fun and
                                    motivational as I used to. This pointed me
                                    to the development area since it always has
                                    been a huge interest of mine.
                                </p>
                                <p>
                                    I started out with Frontend-development. It
                                    felt quite creative and still hugely
                                    demanded on the market which was my main
                                    criteria. I can tell you though – It won’t
                                    stop there. In the future I want to learn
                                    alot about alot. I would love to learn more
                                    about App-development and the dream is to be
                                    involved in something related to music since
                                    I have quite a dense background in the area.
                                </p>
                            </div>
                        </Fade>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Story;
