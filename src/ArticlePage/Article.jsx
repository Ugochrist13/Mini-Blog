import React from "react";
import GabielPics from "./assets/GabielPics.svg";
import GabielImage from "./assets/GabielImage.svg";
import Image1 from "./assets/Image1.svg";
import Image2 from "./assets/Image2.svg";
import Image3 from "./assets/Image3.svg";
import "./Article.css";
import NavBar from "../NavBar/NavBar";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowArticle from "./ShowArticle";
import moment from "moment/moment";
import axios from "axios";

const Article = () => {
  const [articlePost, setArticle] = useState({});
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();

  const [modal, showModal] = useState(false);
  const popModal = () => {
    showModal(true);
  };

  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/" + id)
      .then((result) => {
        setArticle(result.data.data.news);
        // console.log(result.data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });

    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((result) => {
        setRelatedPost(result.data.data.news)
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);


  return (
    <div>
      <NavBar />
      <div className="article">
        <div className="art-head">
          <div className="art-info">
            <img src={GabielPics} alt="" />
            <h3>Oluwatemi Gabiel</h3>
            {moment(articlePost.createdAt).startOf("hour").fromNow()}
          </div>


          <div className="share-me">
            <button onClick={popModal} className="click">
              Edit
            </button>
            <button className="click">Share me</button>
          </div>
        </div>
                   


        <div className="main">
          {modal && <ShowArticle articlePost={articlePost} cancel={showModal} />}

          <div>
            <div>
              <div>
                <img
                  src={
                    !articlePost?.coverImage?.includes("https")
                      ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      : articlePost?.coverImage
                  }
                  alt={articlePost.title}
                />
              </div>
              <h4>{articlePost.title}</h4>
              <p>{articlePost.body}</p>
            </div>

            {/* {posts?.slice(0,9).map(({_id, coverImage, createdAt, title, body}) => {
                    return(
      
                            <div key={_id}>
                                <div ><img src={coverImage} alt={title} /></div>
                                <p>{moment(createdAt).startOf('hour').fromNow()}</p>
                                <h1>{title}</h1>
                                <p>{body.slice(0,60)}....</p>
                            </div>
                    )
                })} */}
          </div>

          {/* <img src={GabielImage} alt="" /> */}
          {/* <h1>
                        Ground Breaking Building is a Classic Example Architecture
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Augue pellentesque quis non natoque cursus et venenatis. Sit
                        posuere ut egestas volutpat adipiscing. Elementum ante
                        viverra dolor, a ultrices cursus. Etiam gravida turpis
                        commodo id enim a fringilla facilisis. A elit luctus
                        accumsan habitant sed faucibus egestas faucibus dictum.
                        Convallis viverra dictum non fusce sapien. Donec ut semper
                        dictum mauris. Lobortis amet, senectus interdum hendrerit
                        convallis adipiscing. Nisl ultricies vitae sem sed. Fusce
                        enim velit massa maecenas vestibulum ac non arcu, porttitor.
                        <br />
                        <br /> Tempus vitae quis at convallis magnis nulla
                        pellentesque in eu. Non, proin vestibulum adipiscing
                        ullamcorper diam tristique ultricies. Sodales urna, rutrum
                        justo, fames pellentesque morbi orci, integer. Sit eget
                        lacus at nunc amet, ante. Faucibus ut enim, elementum
                        venenatis penatibus non quam. Nisl, donec purus in cursus ut
                        eget diam proin ac. Nisl sed ultrices dictum urna neque,
                        vitae nisl. Sit amet consequat non purus nulla suspendisse
                        consectetur. Bibendum et mattis turpis ac tincidunt.
                    </p> */}

        </div>




        <div className="similarArticle">
          <div className="sim-art">
            <hr />
            <h1>Similar Articles </h1>
            <hr />
          </div>
          <div className="commonArticle">
            {relatedPost.map((a) => {
              return (
                <div key={a._id} className="artBox">
                  <img
                    src={
                      !a.coverImage?.includes("https")
                        ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        : a?.coverImage
                    }
                    alt=""
                  />
                  <h2>{a.title}</h2>
                  <p>{a.body}</p>
                  <Link to={`/post/${a._id}`} className="btn1">
                    Read More
                  </Link>
                </div>
              );
            })}

            
            

            

            {/*
            <div className="artBox">
              <img src={Image2} alt="" />
              <h2>How to build a successfully business in Nigeria</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
                urna imperdiet netus nibh at fermentum mattis. Amet adipiscing
              </p>
              <button className="btn2">Read More</button>
            </div>

             <div className="artBox">
              <img src={Image3} alt="" />
              <h2>How to build a successfully business in Nigeria</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
                urna imperdiet netus nibh at fermentum mattis. Amet adipiscing
              </p>
              <button className="btn3">Read More</button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
