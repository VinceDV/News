import { useState, useEffect } from "react";
import { Article } from "../interfaces/Article";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';

const SpecificArticle = (): JSX.Element => {
  const [articles, setArticles] = useState<Article>([]);
  const navigate = useNavigate();
const location = useLocation();

const handleClick = () => {
    navigate("/")
}
  const fetchArticles = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/:${}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticles(data);
      } else {
        alert("response NOT ok");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Col className="col col-sm-12">
        <Card className="mx-5" style={{ width: "25rem" }}>
          <Card.Img variant="top" src={props.article.imageUrl} />
          <Card.Body>
            <Card.Title>{props.article.title}</Card.Title>
            <Card.Text className="text-truncate">
              {props.article.summary}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Go Back
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SpecificArticle;
