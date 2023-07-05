import React, { useEffect } from "react";
import "../styles/settings.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";

export default function Place() {
  const [rows, setRows] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [place, setPlace] = useState("");
  const [district, setDistrict] = useState("");
  const rowsWithId = rows.map((row, index) => ({ ...row, id: index + 1 }));
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "district_name",
      headerName: "District",
      width: 200,
    },

    {
      field: "place_name",
      headerName: "Place",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div onClick={() => placeDelete(params.row.place_id)}>Delete</div>
          </>
        );
      },
    },
  ];

  
  const getData = () => {
    axios
      .get("http://localhost:4000/district")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data.district);
      });

    axios
      .get("http://localhost:4000/place")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setRows(data.place);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const placeDelete = (id) => {
     axios.delete(`http://localhost:4000/place/${id}`).then((response) => {
       getData();
     })
  };

  const saveData = (e) => {
    e.preventDefault();
    var dat = {
      place_name: place,
      district_id: district,
    };
    axios.post("http://localhost:4000/place", dat).then((response) => {
      getData();
    });
  };
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Table Place</h2>

        <div className="details__form">
          <div className="form__group">
            <div>
              <label>District</label>
              <select
                name="district"
                id="district"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              >
                <option value="">Select District</option>
                {districtData.map((d, key) => (
                  <option key={key} value={d.district_id}>
                    {d.district_name}
                  </option>
                ))}
                {/* 
                <option value="Ernakulam">Ernakulam</option> */}
              </select>
              <label>Place</label>
              <input
                type="text"
                placeholder="Enter Place"
                onKeyUp={(e) => {
                  setPlace(e.target.value);
                }}
              />
              <br />
              <br />
              <button className="update__btn" onClick={saveData}>
                Submit
              </button>
            </div>
          </div>

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
