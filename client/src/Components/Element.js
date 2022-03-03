import React from 'react';
import Box from "./box";
function Element(props) {
    function clickHandler(key){
        props.onClick(key);
    }
    return (
        <>
            <div class="container">
                <div lass="row">

                    <Box
                    color ="green"
                    onClick={clickHandler}
                    />

                    <Box
                    color ="red"
                    />
                </div>

                <div class="row">

                    <Box
                    color ="yellow"
                    />

                    <Box
                    color ="blue"
                    />

                </div>

            </div>
        </>
    );
}

export default Element;