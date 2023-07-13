import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

const Search = () => {
  const [district, setDistrict] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [location, setLocationData] = useState([]);
  const [stationData,setStationData] = useState([])
  const [locationData,Location]=useState([])
  const getData = () => {
    axios
      .get("http://localhost:4000/district")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data.district);
      });
  };
  const getPlaceData = (e) => {
    axios
      .get(`http://localhost:4000/ajaxplace/${e}`)
      .then((response) => response.data)
      .then((data) => {
        setPlaceData(data.place);
      });
  };
  const getLocationData = (e) => {
    axios
      .get(`http://localhost:4000/ajaxlocation/${e}`)
      .then((response) => response.data)
      .then((data) => {
        setLocationData(data.location);
      });
  };
  const getStationData = (e) => {
    axios
      .get(`http://localhost:4000/stationdata/${e}`)
      .then((response) => response.data)
      .then((data) => {
        setStationData(data.Station)
        console.log(data.Station);
      });
  };
  // const getStation = () => {
  //   stationData.map
  // }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
    <div className="search-main">
      <div>
        <label>District</label>
      </div>
      <div>
        <select
          name="district"
          id="district"
          onChange={(e) => {
            getPlaceData(e.target.value);
          }}
        >
          <option value="">Select District</option>
          {districtData.map((d, key) => (
            <option key={key} value={d.district_id}>
              {d.district_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Place</label>
      </div>
      <div>
        <select
          name="place"
          id="place"
          onChange={(e) => {
            //  setPlace(e.target.value);
            getLocationData(e.target.value);
          }}
        >
          <option value="">Select Place</option>
          {placeData.map((d, key) => (
            <option key={key} value={d.place_id}>
              {d.place_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Location</label>
      </div>
      <div>
        <select
          name="place"
          id="place"
          onChange={(e) => {
            getStationData(e.target.value);
            //Location(e.target.value)
          }}
        >
          <option value="">Select Location</option>
          {location.map((d, key) => (
            <option key={key} value={d.location_id}>
              {d.location_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* <button class="btn style2" onChange={() => {
           // getStation();
          }}>Search</button> */}
      </div>
      </div>
      
      <div className="cad1">
        
        {stationData.map((d,key)=>(
<div className="cad">
      <img key={key} src={d.station_photo} className="size" alt=""/> 
      <label key={key}>Name {d.station_name}</label>  
      </div>    ))}
    
      </div>
    </div>
  );
};

export default Search;
