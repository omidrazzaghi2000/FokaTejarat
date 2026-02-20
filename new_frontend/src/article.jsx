import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArticlePage from "../components/articles-page-components/article";
import axios from "axios";
import API_URL from "./config/api";

const Article = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/articles/${params.id}/`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setArticle(response.data);
      })
      .catch(() => {
        navigate("/*");
      });
  }, [params.id, navigate]);

  useEffect(() => {
    if (article) {
      document.title = `مقاله - ${article.name}`;
    }
  }, [article]);

  if (!article) {
    return null;
  }

  return (
    <ArticlePage
      title={article.name}
      description={article.description}
      imageSrc={article.image}
    />
  );
};

export default Article;

