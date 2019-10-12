import React from "react";

function StateCard(props)
{
    return (
            <div className="col-md-4">
                <div className="m-1 border border-info text-center">
                <img
                    src={props.image}
                    onClick={props.onClick}
                    alt={props.image}
                    style={{width: 'auto', height: '25vh'}}
                />
                </div>
            </div>
    );
}

export default StateCard;
