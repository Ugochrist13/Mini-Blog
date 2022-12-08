import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import "./HomeBody.css";
import { Link } from "react-router-dom";
// import "animate.css/animate.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast, cssTransition } from "react-toastify";


// const bounce = cssTransition({
//     enter: "animate__animated animate__bounceIn",
//     exit: "animate__animated animate__bounceOut"
//   });

const Home = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((response) => {
        console.log(response.data);
        setposts(response.data);
      }).catch(err => {
        // toast.dark("Something went wrong", {
        //     transition: bounce
        // })
      })
  });

  return (
    <div>
      <h1 className="home-article-header">Latest Articles</h1>
      <div className="home-blogpost">
        {posts
          ?.slice(0, 9)
          .map(({ _id, coverImage, createdAt, title, body }) => {
            return (
              <Link className="home-link" to={`posts/${_id}`} key={_id}>
                <div className="home-blogcontainer" key={_id}>
                  <div>
                    <img
                      className="home-articleimage"
                      src={coverImage}
                      alt={title}
                    />
                  </div>
                  <p className="home-date">
                    {moment(createdAt).startOf("hour").fromNow()}
                  </p>
                  <h4 className="home-articletitle">{title}</h4>
                  <p className="home-mainarticle">{body.slice(0, 60)}....</p>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="home-btncontainer">
        <button className="homeBtn" type="submit">
          Load more articles
        </button>
      </div>
      {/* <ToastContainer transition={bounce} /> */}
    </div>
  );
};
export default Home;
