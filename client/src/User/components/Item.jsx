import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";

const ItemData = (props) => {
  const [d, setD] = useState(props.data);
  const [id, setId] = useState(props.data.station_id);
  const [review, setReview] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/ReviewData/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setReview(data.review);
      });
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={d.station_photo} />
      <Card.Body>
        <Card.Title>{d.station_name}</Card.Title>
        
        <Rating
              sx={{ fontSize: '2.5rem' }}
              name="size-large"
              value={review}
              size="large"
            />
        <Link to={`./Stations/${d.station_id}`}>
          <Button variant="primary">View more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemData;
