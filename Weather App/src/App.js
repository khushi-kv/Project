import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const apikey="2fd0dfbf988992480c24fb626bb75010";
const [inputCity,setInputCity]=useState("");
const[data,setData]=useState({});


const getWeatheDetails=(cityName)=>{
  if(!cityName) return <h1>No Data Found!</h1>;
  const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid="+apikey;
  


  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
     setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}

const handleChangeInput=(e)=>{
  //console.log(e.target.value);
  setInputCity(e.target.value)
}
const handleSearch=()=>{
  getWeatheDetails(inputCity)
}
//testing purpose
useEffect(()=>{
  getWeatheDetails("delhi")
},[]) 
  return (
  <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">WeatherApp</h1>
<div className="d-grid gap-3 col-4 mt-4">
<input type="text" className="form-control" onChange={handleChangeInput} value={inputCity}/>
<button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
</div>

    </div>


    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">

      <img className="weatherIcon" alt="no img" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"></img>

        <h5 className="weatherCity">{data?.name}</h5>
        <h6 className="weatherTemp">Temp:{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        <h2 className="weatherwind">Wind:{data?.wind?.speed}</h2>
        <h3 className="weatherpressure">Humidity:{data?.main?.humidity}</h3>
      </div>
    </div>
  </div>
  );
}

export default App;
