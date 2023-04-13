import { Article } from "../interfaces/Article";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

interface SingleArticleProps {
  article: Article;
}

const SingleArticle = (props: SingleArticleProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/SpecificArticle/" + props.article.id);
  };
  return (
    <Col className="col col-sm-6 col-md-3 mb-5">
      <Card className="mx-5" style={{ width: "25rem", height: "100%" }}>
        <Card.Img
          variant="top"
          src={props.article.imageUrl}
          style={{
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text className="text-truncate">
            {props.article.summary}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
    // onClick={() => navigate('/article')}
  );
};

export default SingleArticle;
