import React from "react";
import "./Banner.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import defaultCoverImage from "./images/95cdfeef.jpeg";

const blog = [
  {
    title: "Prepare for the future",
    body: "xyz",
    coverImage: "hhjbkbj",
  },
];

function Banner() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/",{
        headers:{
          "Content-Type" :"application/json"
        }
      })
      .then((response) => {
        console.log(response.data.data.news);
        setArticle(response.data.data.news.reverse(a => a));
        console.log(response.data.data.news);
      })
      .catch((res) => {
        console.log(res.message);
      });
  }, []);

  return (
    // <></>
    <div
      className="home-banne"
      // style={{ backgroundImage: defaultCoverImage, backgroundSize: "cover"
      // backgroundImage: !article[0]?.coverImage.includes("https")
      // ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      // : article[0]?.coverImage,
      // }}
    >
      <img
        src={
          !article[0]?.coverImage.includes("https")
            ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            : article[0]?.coverImage
        }
        alt=""
        srcSet=""
      />
      <h2>{article[0]?.title}</h2>
      <p>{article[0]?.body.slice(0, 60)}</p>
      <Link to={`post/${article[0]?._id}`}>Read More</Link>
    </div>
  );
}

export default Banner;
