/* eslint-disable no-unused-vars */
import React from "react";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsCalendar2Check } from "react-icons/bs";
const data = [
  {
    img: first,
    title: "21 The Most Stylish Wedding Guest Dresses For Spring",
    date: "Jan 4, 2022",
  },
  {
    img: second,
    title: "21 The Most Stylish Wedding Guest Dresses For Spring",
    date: "Feb 24, 2021",
  },
  {
    img: third,
    title: "21 The Most Stylish Wedding Guest Dresses For Spring",
    date: "Dec 14, 2023",
  },
];

const EditorsInsight = () => {
  return (
    <div className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="fs-5 text-justify">
                  {item.title}
                </Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted d-flex align-items-center gap-2">
                <BsCalendar2Check />
                <span>{item.date}</span>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EditorsInsight;
