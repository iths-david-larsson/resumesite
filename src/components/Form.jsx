import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

init("user_nZuozMy1SFDWruneqVgFw");

const DefaultForm = () => {
    const { register, handleSubmit, errors, watch, reset } = useForm();
    let [formOk, setFormOk] = useState(false);

    const sendEmail = (e, data) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "template_dn77jyq",
                e.target,
                "user_nZuozMy1SFDWruneqVgFw"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormOk(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    formOk
        ? setTimeout(() => {
              setFormOk(false);
          }, 5000)
        : console.log();

    return (
        <FormComp
            onSubmit={sendEmail}
            action="MAILTO:davvelars@hotmail.com"
            method="post"
            enctype="text/plain"
            className="form-component"
        >
            <h2>Fill out the form and I'll get back to you.</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    ref={register({
                        required: true,
                        minLength: 2,
                    })}
                />
                {errors.name && errors.name.type === "required" && (
                    <p className="form-val-error">Please enter a name</p>
                )}
                {errors.name && errors.name.type === "minLength" && (
                    <p className="form-val-error">This name is too short</p>
                )}
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="e-mail"
                    ref={register({
                        required: true,
                        minLength: 2,
                    })}
                />
                {errors.email && errors.email.type === "required" && (
                    <p className="form-val-error">Please enter your email</p>
                )}
                {errors.email && errors.email.type === "minLength" && (
                    <p className="form-val-error">E-mail is too short</p>
                )}
            </div>
            <div>
                <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    ref={register({
                        required: true,
                        minLength: 2,
                    })}
                />
                {errors.subject && errors.subject.type === "required" && (
                    <p className="form-val-error">Please enter a subject</p>
                )}
                {errors.subject && errors.subject.type === "minLength" && (
                    <p className="form-val-error">
                        This can't be a real subject, it's too short
                    </p>
                )}
            </div>
            <div>
                <textarea
                    type="text"
                    name="message"
                    placeholder="message"
                    ref={register({
                        required: true,
                        minLength: 2,
                    })}
                />
                {errors.message && errors.message.type === "required" && (
                    <p className="form-val-error">Please enter a message</p>
                )}
                {errors.message && errors.message.type === "minLength" && (
                    <p className="form-val-error">This message is too short</p>
                )}
            </div>
            <div>
                <button type="submit">
                    <p>send</p>
                </button>
                {formOk ? (
                    <p className="good-post">Your message have been sent!</p>
                ) : (
                    ""
                )}
            </div>
        </FormComp>
    );
};

export default DefaultForm;

const FormComp = styled.form`
    /* @media screen and (max-width: 768px) {
        display: none;
    } */
    div {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .form-val-error {
            position: absolute;
            bottom: 1rem;
            right: 0;
            color: red;
        }
        .good-post {
            position: absolute;
            bottom: 1rem;
            right: 0;
            color: white;
        }
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: white;
    h2 {
        align-self: flex-start;
        min-width: 500px;
        text-align: left;
        margin-top: 2rem;
        @media screen and (max-width: 1024px) {
            font-size: 16px;
        }
        @media screen and (max-width: 560px) {
            font-size: 14px;
        }
    }
    input,
    textarea {
        font-family: "Neue Montreal";
        color: white;
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid white;
        height: 3rem;
        margin: 1rem 0;
        transition: all 0.5s ease;
        position: relative;
        font-size: 20px;
        &::placeholder {
            color: white;
            font-size: 20px;
            transition: all 0.2s ease;
            position: absolute;
        }
        &:focus {
            outline: none;
        }
        &:focus {
            &::placeholder {
                outline: none;
                right: 1rem;
            }
        }
    }
    button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        border: 1px solid white;
        max-width: 200px;
        margin: 2rem 0;
        border-radius: 0.2rem;
        position: relative;
        transition: all 0.3s ease;
        cursor: pointer;
        background: transparent;
        padding: 0.5rem 2rem;
        font-size: 18px;
        @media screen and (max-width: 560px) {
            width: 100%;
            align-self: center;
        }
        p {
            z-index: 1;
            margin: 0;
        }
        color: white;
        &:after {
            content: "";
            position: absolute;
            width: 0%;
            height: 100%;
            background: transparent;
            left: 0;
            transition: all 0.3s ease;
        }
        &:hover {
            color: black;
            &:after {
                background: white;
                width: 100%;
            }
        }
    }
`;
