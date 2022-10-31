import NavBar from "../NavBar/NavBar";
import { useForm } from "react-hook-form";
import "./AddPost.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../ContexApi/Context";
import { useNavigate } from "react-router-dom";
const AddPost = () => {


  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [clickCheck, setClickCheck] = useState("Post");
  const { access } = useContext(Context);

  const onSubmit = async (data) => {
    setClickCheck("Posting...");
    axios
      .post("https://miniblogskillup.herokuapp.com/api/posts/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: access.token,
        },
      })
      .then((response) => {
        navigate(`/post/${response.data.data.news._id}`)
        alert("posted successfully");
        setClickCheck("Post");
      })
      .catch((err) => {
        console.error(err);
        setClickCheck("Post");
      });
  };

  return (
    <div>
      <NavBar />

      <div className="Blog-article">
        <div>
          <h2>Post a new article</h2>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Blog title"
              className="blog-title"
            />{" "}
            <br />
            <br />
            <input
              type="text"
              {...register("coverImage", { required: true })}
              placeholder="Image url"
              className="image-url"
            />
            <br />
            <br />
            <textarea
              cols="30"
              rows="10"
              {...register("body", { required: true })}
              placeholder="Blog Content"
              className="blog-content"
            ></textarea>
            <br />
            <button type="submit" className="post">
              {clickCheck}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
