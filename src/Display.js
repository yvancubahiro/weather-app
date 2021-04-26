
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CityManager from './CityManager'
//import AddCity from './CityList'
import reportWebVitals from './reportWebVitals';
import ActualLocation from './ActualLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';

var cities = ["Ottawa","Gatineau"];
//var actualCity = "Ottawa";


function Display(props){

    const [actualCity,setActualCity] = useState("");
    const[time, setTime] = useState("N/A");
    const[temp, setTemp] = useState("N/A");
    const[feelslike, setfeelslike] = useState("N/A");
    const[humidity, setHumidity] = useState("N/A");
    const[precipitation, setPrecipitation] = useState("N/A");
    const[pressure, setPressure] = useState("N/A");
    const[windSpeed, setWindSpeed] = useState("N/A");
    const[windDegree, setWindDegree] = useState("N/A");
    const[cloud, setCloud] = useState("N/A");
    const[UV, setUV] = useState("N/A");
    const[text,setText] = useState("N/A");

    if(actualCity==""){
    changeActualCity("Bujumbura");
    }
   function changeActualCity(city){
        const url = 'http://api.weatherapi.com/v1/current.json?key=20339621d05a43ea954154627211304&q='+city;
        try{
        fetch(url)
        .then(response => response.json())
        .then(data => (setTemp(data.current.temp_c),
            setfeelslike(data.current.feelslike_c),
            setHumidity(data.current.humidity),
            setPrecipitation(data.current.precip_mm),
            setPressure(data.current.pressure_mb),
            setWindSpeed(data.current.wind_kph),
            setWindDegree(data.current.wind_degree),
            setUV(data.current.uv),
            setCloud(data.current.cloud),
            setTime(data.current.last_updated.substring(10)),
            setActualCity(data.location.name),
            setText(data.current.condition.text)
        ))     
        
        }catch(e){ }
    }


    

    return <div className="container">
        <br/>
    <div className="row">
    <div className="col-sm-8"><ActualLocation name={actualCity}
                                                temp={temp}
                                                feelslike={feelslike}
                                                humidity={humidity}
                                                precipitation={precipitation}
                                                pressure={pressure}
                                                windSpeed={windSpeed}
                                                text={text}
                                                windDegree={windDegree}
                                                uv={UV}
                                                cloud={cloud}
                                                time={time}
                                                actualCity={actualCity}
                                                changeCity={changeActualCity}

    /></div>
    <div className="col-sm-4"><CityManager data={cities} changeCity={changeActualCity}/></div>
    </div>
    </div>
}

export default Display;