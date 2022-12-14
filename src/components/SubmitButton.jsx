import React from 'react';

export const SubmitButton = ({answer}) => {
    return <div className="row float">
        <button className="btn btn-success" type="submit" onClick={() => console.log("Message:" + answer)}>
            Submit
        </button>
    </div>
}
