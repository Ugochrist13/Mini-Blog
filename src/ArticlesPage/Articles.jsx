
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Articles.css"

const ArticlesPage = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((response) => {
        console.log(response.data);
        setposts(response.data.data.news);
      });
  }, []);

  return (
    <div className="Article">
      {/* SIMILAR ARTICLE */}

      <div className="similarArticle">
        <div className="sim-art">
          <hr />
          <h1>Articles </h1>
          <hr />
        </div>

        <div className="commonArticle">

          {posts
            ?.slice(0, 9)
            .map(({ _id, coverImage, createdAt, title, body }) => {
              return (
                <div key={_id} className="ArtBox">
                  <img src={coverImage} alt={title} />
                  <h2>{title}</h2>
                  <p>{body.slice(0, 60)}....</p>
                  <Link to={`/post/${_id}`}> <button className="btn1">Read More</button> </Link>
                </div>
              );
            })}
            
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;


