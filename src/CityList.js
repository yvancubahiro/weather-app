import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import City from './City';

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

    function handleSubmit(e){
        props.addCity(city);
        setCity("");
        e.preventDefault();
    }

    function handleChange(e){
        const location = e.target.value;
        setCity(e.target.value)
    }

    return(
    <form onSubmit={handleSubmit} className="form-inline">
        <div className="col">
        <input type="text" className="form-control" placeholder="Add new city" onChange={handleChange} value={city} />
        
        
        <button type="submit" className="btn btn-primary mb-2">Add</button>
     
        </div>
    </form>
    );
}


export {CityList, AddCity}