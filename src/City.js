import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function City(props){

    const [ name, setName ] = useState(props.name);
    const [ temp, setTemp ] = useState("N/A");

    const url = 'http://api.weatherapi.com/v1/current.json?key=20339621d05a43ea954154627211304&q='+name;
   
    fetch(url)
    .then(response => response.json())
    .then(data => (setTemp(data.current.temp_c),setName(data.location.name))).catch(function() {
        console.log("error");
    });



    return  <div className="summaryDisplay container" onClick={()=>{props.changeCity(props.name)}} >
        <div className="row">
        <div className="col-sm-8" id="name">{name}</div>
        <div className="col-sm-4" id="temp">{temp}°C</div>
        </div>
        

        </div> 
}

export default City;