/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Image } from "react-bootstrap";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light rounded-1 p-2 my-5">
      <div className="text-center">
        <Image src={qZone1} alt="" className="img-fluid" />
        <Image src={qZone2} alt="" className="img-fluid" />
        <Image src={qZone3} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default QZone;
