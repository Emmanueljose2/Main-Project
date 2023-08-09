  import React from "react";
import { Form } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import "../style/form.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [placeData,setPlaceData]=useState([])
  const [districtData, setDistrictData] = useState([]);
  const [locationdata, setlocationeData] = useState([]);
  const [location, setLocation] = useState("");
  const [contact,setContact]=useState("")
  const[email,setEmail]=useState("")
  const[adress,setAdress]=useState("")
  const[photo,setPhoto]=useState("")
  const[password,setPassword]=useState("")
  const saveData = (e) => {
    e.preventDefault();
    const frm = new FormData();
    frm.append("owner_name", name);
    frm.append("owner_contact", contact);
    frm.append("owner_email", email);
    frm.append("owner_adress",adress)
    frm.append("owner_photo", photo)
    frm.append("owner_password", password)
    frm.append("location_id", location)
    axios
      .post("http://localhost:4000/OwnerRegistor", frm)
      .then((response) => response.data).then((data)=>{
        if(data.message=="Datasaved"){
          alert("Registration Sucess")
          navigate('/login')
        }
        else
        {
          alert("Vehicle Owner Registration Failed")
        }
      });
  };
  const getData = () => {
    axios.get("http://localhost:4000/district")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data.district);
      });
  };
  const getPlaceData = (e) => {
    axios.get(`http://localhost:4000/ajaxplace/${e}`)
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
  useEffect(() => {
    getData();
  }, []);
  return (
    <Row>
      <Col></Col>
      <Col>
        <Form className="form1" onSubmit={saveData}>
          <div className="font">
            <h5>Vechicle Owner Registration</h5>
          </div>
          <FormGroup className="Name">
            <Label sm={2} for="firstname" className="style">
               Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="First Name"
              type="text"
              required
              pattern="[A-Za-z ]{3,}"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormGroup>

          
          <FormGroup className="Name">
            <Label for="phone" className="style">
              Contact
            </Label>
            <Input id="phone" name="phone" required
              pattern="[+0-9]{10,13}" placeholder="Phone" type="phone"
            onChange={(e) => {
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
              type="email" onChange={(e) => {
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
            <Label for="File" className="style">
              Photo
            </Label>
            <Input id="File" name="File" placeholder="Adress" type="file"
            onChange={(e) => {
              setPhoto(e.target.files[0]); }} />
          </FormGroup>
          <FormGroup className="Name">
            <Label for="userid" className="style">
              Password
            </Label>
            <Input id="password" name="password" placeholder="password" type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
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
          
          
          <FormGroup className=" button1">
            <button type="submit">Submit</button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default Registration;
