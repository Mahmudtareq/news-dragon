/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { Container } from "react-bootstrap";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <Container>
      {id && (
        <h1 className="fs-4 text-start mt-3 mb-3">
          This category News :{categoryNews.length}
        </h1>
      )}
      {categoryNews.map((newsItem) => (
        <NewsCard key={newsItem._id} newsItem={newsItem} />
      ))}
    </Container>
  );
};

export default Category;
