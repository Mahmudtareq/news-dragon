/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container className="my-3">
      <h1 className="fs-4 text-start mb-3 ">All Category</h1>
      <div className="px-lg-4">
        {categories.map((category) => (
          <p key={category.id} className="categories-text">
            <Link to={`/category/${category.id}`} className="categories-link">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </Container>
  );
};

export default LeftSidebar;
