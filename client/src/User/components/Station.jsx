import React from "react";
import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Station = () => {
  const user_id=sessionStorage.getItem('uid')
  const { id } = useParams();
  const [stationData, setStationData] = useState([]);
  const [bookData,setBookData]=useState([])
  const navigate = useNavigate();
  const getStationData = () => {
    const e = localStorage.getItem("sessionId");
    console.log(e);

    axios
      .get(`http://localhost:4000/stationdetails/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setStationData(data.Station);
      });
  };
  const bookStation=()=>{
   
    axios.get(`http://localhost:4000/bookstation/${id}/${user_id}`).then((response) => response.data)
    .then((data) => {
      setBookData(data.PackageData);
    });
  }
  const Subscribe=()=>{
    navigate('../Package')

  }
  const Book=(e)=>{
    navigate(`/user/slotbooking/${id}/${e}`)

  }
  useEffect(() => {
    getStationData();
    bookStation();
  }, []);


  return (
    <div>
      {stationData.map((d, key) => (
          <div className="bi">
            <div>
              <img
                src={d.station_photo}
                width="200"
                height="150"
                className="rounded"
              />
            </div>
            <div>
              <label className="station"> Station Name:</label>
              <label className="data">{d.station_name}</label>
            </div>
            <div>
              <label className="station">Station Phone:</label>
              <label className="data">{d.station_contact}</label>
            </div>
            <div>
              {" "}
              <label className="station">Station email:</label>
              <label className="data">{d.station_email}</label>
            </div>
            <div>
              {" "}
              <label className="station">Station Adress:</label>
              <label className="data">{d.station_adress}</label>
            </div>
            <div>
              <label className="station">Slot count:</label>
              <label className="data">{d.slot_count}</label>
            </div>
            <div className="package">
              {bookData==false &&(<button className="btn btn-primary" onClick={()=>Subscribe()}>Subscribe</button>)}
              {bookData!=false &&(<button className="btn btn-primary" onClick={()=>Book(bookData[0].package_id)}>Book</button>)}

            </div>
          </div>
      ))}
      
    </div>
  );
};
