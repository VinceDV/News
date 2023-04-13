import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";
import { Article } from "../interfaces/Article";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const FetchComponent = (): JSX.Element => {


  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // data è l'array di libri
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
      {articles.map((article) => (
        <SingleArticle article={article} key={article.id} />
      ))}{" "}
    </>
  );
};

export default FetchComponent;
