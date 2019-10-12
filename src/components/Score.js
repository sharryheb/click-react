import React from "react";

function Score(props)
{
    let displayPoints = props.points > 0 ? props.points : props.lastPoints;
    return (
        <div className="row">
            <div className="col-12 py-0 bg-info text-white h3">
                <div className="float-left">Your Score: {displayPoints}</div>
                <div className="float-right">{props.message}</div>
            </div>
        </div>
    )
}

export default Score;
