import React from "react";


export default function UseCallBackExample(props){
    return (
        <div>
            <h2>UseCallback() Example</h2>
            <button onClick={props.handler}>Make callback</button>
        </div>
    )
}