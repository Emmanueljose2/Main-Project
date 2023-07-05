import React, { useEffect, useState } from "react";
import "../styles/settings.css";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const District = () => {
  const [rows, setRows] = useState([]);
  const [district, setDistrict] = useState("");

  const columns = [
    {
      field: "district_id",
      headerName: "ID",
      width: 330,
    },
    {
      field: "district_name",
      headerName: "district",
      width: 360,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <div onClick={() => districtDelete(params.row.district_id)}>
              Delete
            </div>
          </>
        );
      },
    },
  ];

  const districtDelete = (id) => {
    axios.delete(`http://localhost:4000/district/${id}`).then((response) => {
      getData();
    });
  };

  const getData = () => {
    axios
      .get("http://localhost:4000/district")
      .then((response) => response.data)
      .then((data) => {
        setRows(data.district);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const saveData = (e) => {
    e.preventDefault();

    var dat = {
      district_name: district,
    };

    axios.post("http://localhost:4000/district", dat).then((response) => {
      getData();
    });
  };

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Table District</h2>

        <div className="details__form">
          <form>
            <div className="form__group">
              <div>
                <label>District</label>
                <input type="text" placeholder="Enter Your District" onKeyUp={(e)=>setDistrict(e.target.value)}/>
                <br />
                <br />
                <button className="update__btn" onClick={saveData}>Submit</button>
              </div>
            </div>
          </form>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{ color: "white" }}
              getRowId={(row) => row.district_id}
              rows={rows}
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
};

export default District;
