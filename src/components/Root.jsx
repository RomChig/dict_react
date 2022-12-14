import React, {useEffect, useState} from "react";

import "../styles/main.scss"
import {Question} from "./Question";
import {SubmitButton} from "./SubmitButton";
import {getQuestion} from "../services/QuestionService";



export const Root = () => {
    const [message, setMessage] = useState('');
    const [question, setQuestion] = useState('Some question');

    useEffect(() => {
        getQuestion().then(q => setQuestion(q))
    }, []);

    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);
    };
    return (
        <div className="container-fluid">
            <div className="row float">
                <Question question={question}/>
                <div className="col-1 background2 m-5">
                    <textarea className="form-control text-success font-monospace h-100"
                              placeholder="Залиште відповіть тут" onChange={handleMessageChange}>
                    </textarea>
                </div>
            </div>
            <SubmitButton answer={message}/>
        </div>
    )
};
