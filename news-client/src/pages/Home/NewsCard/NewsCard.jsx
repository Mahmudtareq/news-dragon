/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import moment from "moment";
import { BsBookmark, BsFillStarFill, BsShare } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";

const NewsCard = ({ newsItem }) => {
  const { _id, total_view, title, details, image_url, author, rating } =
    newsItem;
  console.log(newsItem);
  return (
    <Card className="mb-5 mt-4">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Image src={author?.img} width={42} height={42} roundedCircle />
          <div className="d-flex flex-column ms-2  ">
            <p className="header_text m-0">{author?.name}</p>
            <p className="header_date m-0">
              {" "}
              {moment(author?.published_date).format("MMMM Do YYYY")}
            </p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <span>
            <BsBookmark className="fs-5" />
          </span>
          <span>
            <BsShare className="fs-5" />
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} className="my-3" />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)} ...{" "}
              <Link to={`/news/${_id}`} className="text-danger">
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className=" d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-1">
          <span>
            <BsFillStarFill className="text-danger " />
          </span>
          <span>
            <BsFillStarFill className="text-danger " />
          </span>
          <span>
            <BsFillStarFill className="text-danger " />
          </span>
          <span>
            <BsFillStarFill className="text-danger " />
          </span>
          <span>
            <BsFillStarFill className="text-danger " />
          </span>
          <span className="ms-1 mt-1 text-muted">{rating.number}</span>
        </div>

        <div className="d-flex align-items-center gap-1">
          <span>
            <GrFormView className="fs-4" />
          </span>
          <span className="fs-6">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
