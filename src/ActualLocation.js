import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import City from './City';


function ActualLocation(props){


return( 
<div className="container actualLocation">
    <br/>
    <div className="row">
        <div className="col-sm-7"><div id="cityName">{props.name}</div><div className="data">{props.text}</div></div>
        <div className="col-sm-4 text-right"><div className="desc">Last update</div><br/><div className="data" id="time">{props.time}</div></div>
    </div>
    <hr class="soften iframe-hide" />
    <div className="row">
        <div className="col-sm"><div className="desc">temperature</div><br/><div id="temp">{props.temp} °C</div></div>
        <div className="col-sm"><div className="desc">feels like</div><br/><div id="temp">{props.feelslike} °C</div></div>
    </div>
    <hr class="soften iframe-hide" />
    <div className="row">
        <div className="col-sm"><div className="desc">humidity</div><br/><div className="data">{props.humidity}</div></div>
        <div className="col-sm"><div className="desc">precipitation</div><br/><div className="data" >{props.precipitation} mm</div></div>
        <div className="col-sm"><div className="desc">pressure</div><br/><div className="data">{props.pressure} mb</div></div>
    </div>
    <hr class="soften iframe-hide" />
    <div className="row">
        <div class="col-sm"><div className="desc">wind speed</div><br/><div className="data">{props.windSpeed} km/h</div></div>
        <div class="col-sm"><div className="desc">wind degree</div><br/><div className="data">{props.windDegree}</div></div>
        <div class="col-sm"><div className="desc">cloud</div><br/><div className="data">{props.cloud}</div></div>
        <div class="col-sm"><div className="desc">UV</div><br/><div className="data">{props.uv}</div></div>
    </div>
    <br/>

</div>
)
}

export default ActualLocation;