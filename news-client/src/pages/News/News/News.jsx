import { Button, Card, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;

  return (
    <Container>
      <Card>
        <Card.Img
          variant="top"
          className="img-fluid p-lg-4 p-2"
          src={image_url}
        />
        <Card.Body className="w-100">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-justify">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              {" "}
              <AiOutlineArrowLeft className="fs-4 me-2" />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight />
    </Container>
  );
};

export default News;
