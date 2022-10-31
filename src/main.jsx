import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
    // useEffect(() => {
    //   console.log(localStorage.getItem("mini-blog-access"));
    //   {
    //     localStorage.getItem("mini-blog-access") === null &&
    //       localStorage.setItem(
    //         "mini-blog-access",
    //         JSON.stringify({
    //           token: "",
    //           isLoggedIn: false,
    //           userId: "",
    //         })
    //       );
    //   }
    // }, [])
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
