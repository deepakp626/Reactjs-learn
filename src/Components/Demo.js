import React from "react";

const Demo = (props)=>{
    console.log(props)
    return(
        <div>
            <i>{props.number}</i>
        </div>
    )
}

export default Demo;