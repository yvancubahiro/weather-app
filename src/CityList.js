import './App.css';
import React, { useState} from 'react';
import City from './City';
import Component from './Component';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


function CityList(props){

    const arr = props.data;
    console.log(arr);
    const result = arr.map((val, index) =>
    <City name={val} key={index} changeCity={props.changeCity}/>
    );
    
    return <lu>{result}</lu>

}

function AddCity(props){

    const [ city, setCity ] = useState("");

    function handleSubmit(){
        props.addCity(city);
        setCity("");
        
    }

    function handleChange(e){
        /*const location = e.target.value;
        setCity(e.target.value)*/
        console.log(e.label);
        props.addCity(e.label);
        
    }

    function verify(){
        console.log(city);
    }

    return(
        
        <div>
        <GooglePlacesAutocomplete apiKey={"AIzaSyBbR7n4irNa7wIsnnBKaVafagAo56a8nc0"}         
            selectProps={{
           
            onChange: handleChange,}} 
        />
       
      </div>
        
    );
}


export {CityList, AddCity}