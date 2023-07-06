import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './style.css'

const Search = () => {
  const [district, setDistrict] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [place, setPlace] = useState([]);
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="search-main">
      <div>
      <label>District</label></div>
      <div><select
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
      </select></div>
      <div><label>Place</label></div>
      <div><select
        name="place"
        id="place"
        onChange={(e) => {
          setPlace(e.target.value);
        }}
      >
        <option value="">Select Place</option>
        {placeData.map((d, key) => (
          <option key={key} value={d.place_id}>
            {d.place_name}
          </option>
        ))}
      </select></div>
     <div><button class="btn style2">Search</button></div>
    </div>
  );
};

export default Search;
