import React from "react";
import './SnowFlake.scss'
import snowflakeImage from '../assets/snow.png';

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