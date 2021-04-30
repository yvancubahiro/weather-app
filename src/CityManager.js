import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {CityList,AddCity} from './CityList';
import City from './City';


function CityManager(props){

    const [cities, setCities] = useState(props.data);
    const [actualCity, setActualCity] = useState("Ottawa");

    function changeActualCity(){}

    function addCity(cityName){
        setCities([...cities,cityName]);
        
    }


    return(
        <div>
        <AddCity addCity={addCity}/>
        <CityList data = {cities} changeCity={props.changeCity}/>
        </div>
    )

    

}

export default CityManager;