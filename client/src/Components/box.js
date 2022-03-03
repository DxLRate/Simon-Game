import React from 'react';

function Box(props) {
    function clickHandler(){
        props.onClick(props.color);
    }
    return (
        <>
           <div type="button" onClick={clickHandler} id={props.color} className={"btn "+props.color+" "+props.fade+" "+props.press?"pressed":""}>

           </div>
        </>
    );
}

export default Box;