import {useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Article.css";

const ShowArticle = ({ articlePost, cancel }) => {
  const { register, handleSubmit } = useForm();
  const [tempData, settempData] = useState(articlePost)

  const onSubmit = async (data) => {
    axios
      .put("https://dashboard.heroku.com/apps/miniblogskillup", data)
      .then((response) => {
        alert(response.data.message);
        console.log("posted");
      });
  };

  return (
    <div className="mymodal">
      <div className="myblog">
        <div>
          <h2>Post a new article</h2>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("title")}
              placeholder="Blog title"
              className="title"
              value={tempData.title}
            />{" "}
            <br />
            <br />
            <input
              type="text"
              {...register("Image url")}
              placeholder="Image url"
              className="title"
              value={tempData.coverImage}

            />
            <br />
            <br />
            <textarea
              cols="87"
              rows="20"
              {...register("body")}
              placeholder="Blog Content"
              className="content"
              value={tempData.body}
            ></textarea>
            <br />
            <button type="submit" className="mypost">
              Post
            </button>
            <button
              className="mypost"
              onClick={() => {
                cancel(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShowArticle;
