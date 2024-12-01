import React from "react";
import './SnowFlake.scss'
import snowflakeImage from '../assets/snow.svg';

function SnowFlake() {
    return(
        <>
            <div className="snowflake">
                <img src={snowflakeImage} alt="Snowflake" />
            </div>
        </>
    )
}

export default SnowFlake;