import React from "react";

export const Question = ({question}) => {
    return <div className="col-1 background m-5 text-start font-monospace rounded">
        <p className="font-monospace p-2">{question}</p>
    </div>;
}
