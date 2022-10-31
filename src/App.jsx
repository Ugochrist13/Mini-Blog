import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./ArticlePage/Article";
import AddPost from "./AddPostPage/AddPost";
import EditorPost from "./EditorPage/EditorPost";
import Login from "./LoginPage/Login";
import Register from "./RegisterPage/Register";
import Articles from "./ArticlesPage/Articles";
import { ContextProvider } from "./ContexApi/Context";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    {
      console.log(localStorage.getItem("mini-blog-access"));
      localStorage.getItem("mini-blog-access") === null &&
        localStorage.setItem("mini-blog-access", JSON.stringify({
          token: "",
          isLoggedIn: false,
          userId: "",
        }));
    }
  }, []);
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Articles />} />
          <Route path="/post/:id" element={<Article />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/editor/:id" element={<EditorPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
