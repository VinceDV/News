import { useState, useEffect } from "react";
import { Article } from "../interfaces/Article";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

const SpecificArticle = (): JSX.Element => {
  
    const [article, setArticle] = useState<Article | null > (null);
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    const handleClick = () => {
        navigate("/");
    };
  
  const fetchArticles = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticle(data);
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
      <Col className="col col-sm-12 d-flex justify-content-center">
        {article &&
        <Card className="mx-5" style={{ width: "25rem" }}>
          <Card.Img variant="top" src={article.imageUrl} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              {article.summary}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>
              Go Back
            </Button>
          </Card.Body>
        </Card>}
      </Col>
    </>
  );
};

export default SpecificArticle;
