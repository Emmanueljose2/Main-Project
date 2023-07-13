import React from "react";
import { Button, Form } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import "../style/form.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Registration = () => {
  const [firstname, setFirstName] = useState("");
  const [district, setDistrict] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [place, setPlace] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [location, setLocation] = useState("");
  const [locationdata, setlocationeData] = useState([]);
  const [contact,setContact]=useState("")
  const[email,setEmail]=useState("")
  const[adress,setAdress]=useState("")
  const[proof,setProof]=useState("")
  const[photo,setPhoto]=useState("")
  const[password,setPassword]=useState("")
  const[slotcount,setSlot]=useState("")
  const saveData = (e) => {
    e.preventDefault();
    const frm = new FormData();
    frm.append("station_name", firstname);
    frm.append("station_contact", contact);
    frm.append("station_email", email);
    frm.append("station_adress",adress)
    frm.append("station_proof", proof)
    frm.append("station_photo", photo)
    frm.append("password", password)
    frm.append("location_id", location)
    frm.append("slot_count", slotcount)
    axios
      .post("http://localhost:4000/StationRegistor", frm)
      .then((response) => {
        //getData()
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
        setlocationeData(data.location);
        console.log(data.location);
      });
  };
  return (
    <Row>
      <Col></Col>
      <Col>
        
        <Form className="form1">
        <div className="font">
          <h5>Station Registration</h5>
        </div>
          <FormGroup className="Name">
            <Label sm={2} for="firstname" className="style">
              Name
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder=" Name"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="phone" className="style">
              Contact
            </Label>
            <Input id="phone" name="phone" placeholder="Phone" type="phone" onChange={(e) => {
                setContact(e.target.value);
              }} />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="email" className="style">
              email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              
            />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="Adress" className="style">
              Adress
            </Label>
            <Input
              className="col"
              id="Adress"
              name="Adress"
              placeholder="Adress"
              type="textarea"
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="proof" className="style">
              Proof
            </Label>
            <Input id="proof" name="File" placeholder="Adress" type="file" onChange={(e) => {
                setProof(e.target.files[0]);
              }} />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="File" className="style">
              Photo
            </Label>
            <Input id="File" name="File" placeholder="Photo" type="file" onChange={(e) => {
                setPhoto(e.target.files[0]); }}/>
          </FormGroup>

          <FormGroup className="Name">
            <Label for="status" className="style">
              Password
            </Label>
            <Input
              className="col"
              id="Password"
              name="Password"
              placeholder="Password"
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="status" className="style">
              District
            </Label>
            <select
              name="District"
              id="District"
              onChange={(e) => {
                getPlaceData(e.target.value);
              }}
            >
              <option value="">Select</option>
              {districtData.map((d, key) => (
                <option key={key} value={d.district_id}>
                  {d.district_name}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup className="Name">
            <Label for="status" className="style">
              Place
            </Label>
            <select
            className="reg-sel"
              name="Place"
              id="Place"
              onChange={(e) => {
                getLocationData(e.target.value);
              }}
            >
              <option value="">Select</option>
              {placeData.map((d, key) => (
                <option key={key} value={d.place_id}>
                  {d.place_name}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup className="Name">
            <Label for="status" className="style">
              Location
            </Label>
            <select
              name="Place"
              id="Place"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value="">Select</option>
              {locationdata.map((d, key) => (
                <option key={key} value={d.location_id}>
                  {d.location_name}
                </option>
              ))}
            </select>
          </FormGroup>
          
          <FormGroup className="Name">
            <Label for="status" className="style">
              Slot Count
            </Label>
            <Input
              className="col"
              id="Slot"
              name="Slot"
              placeholder="Slot Count"
              type="text"
              onChange={(e) => {
                setSlot(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup className=" button1">
            <Button onClick={saveData}>Submit</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default Registration;
