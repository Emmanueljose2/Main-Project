import React from "react";
import "../styles/settings.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Location() {
  const [location, setLocation] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [place, setPlace] = useState([]);
  const [rows, setRows] = useState([]);
  const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }));

  const columns = [
    {
     field: "id",
     headerName: "ID", 
     width: 90 
    },
    {
      field: "district_name",
      headerName: "District",
      width: 150,
      editable: true,
    },
    {
      field: "place_name",
      headerName: "Place",
      width: 160,
    },
    {
      field: "location_name",
      headerName: "Location",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <button onClick={() => placeDelete(params.row.location_id)}>Delete</button>
          </>
        );
      },
    },
  ];

  const placeDelete = (id) => {
    console.log('hi');
    axios.delete(`http://localhost:4000/location/${id}`).then((response) => {
      getData();
    })
  }

  const getData = () => {
    axios
      .get("http://localhost:4000/district")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data.district);
      });
      
   
    axios
      .get("http://localhost:4000/location")
      .then((response) => response.data)
      .then((data) => {
        console.log(data.location);
        setRows(data.location);
      });
  }

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
 
  const saveData = (e) => {
    e.preventDefault();
    var dat = {
      location_name: location,
      place_id: place,
    };
    console.log(dat);
    axios.post("http://localhost:4000/Location", dat).then((response) => {});
  };

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Table Location</h2>

        <div className="details__form">
          <form>
            <div className="form__group">
              <div>
                <label>District</label>
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
                <label>Place</label>
                <select
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
                </select>
                <label>Location</label>
                <input
                  type="text"
                  placeholder="BusStand,RailwayStation"
                  onKeyUp={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <br />
                <br />
                <button className="update__btn" onClick={saveData}>
                  Submit
                </button>
              </div>
            </div>
          </form>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{ color: "white" }}
              getRowId={(row) => row.id}
              rows={rowsWithId}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
    </div>
  );
}
