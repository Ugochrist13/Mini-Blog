import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Context } from "../ContexApi/Context";

function Login() {
  const { access, setAccess } = useContext(Context);

  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    {
      access.isLoggedIn &&
        setTimeout(() => navigate("/editor/"+ access.userId), 1000);
    }
  }, []);

  const submitDetails = (data) => {
    setServerError("");
    axios
      .post("https://miniblogskillup.herokuapp.com/api/users/login", data)
      .then((result) => {
        const res = {
          token: result.data.data,
          isLoggedIn: true,
          userId: result.data.authorId,
        };

        setAccess(res);

        localStorage.setItem("mini-blog-access", JSON.stringify(res));

        navigate("/editor/" + res.userId);
        alert(result.data.message);
      })
      .catch((e) => {
        if (e.response.status == 400) {
          setErrors("Account not found");
          setServerError(e.response.data.message);
        }
        alert(e.response);
      });
  };

  return (
    <>
    <div className='loginpage'>
      <div className='logleft'>
        <div className="logtxtcnt">
          <div className="logspace"></div>
          <NavLink className="loghome" to="/">
            SkillUp Africa Blog
          </NavLink>
          <h2 className="logtitle">
            The Ancient city of Rome and the history of the great city.
          </h2>
          <div id="logautor">
            <h3 id="logolive">Olive Junior</h3>
            <h4 id="loglead">Lead Writer, SkillUp Africa</h4>
          </div>
        </div>
      </div>
      <div className="logright">
        <div className="logform">
          <div className="logwelcont">
            <h1 id="logwelcm">Welcome Back!</h1>
            <p id="logdetails">Welcome back, please enter your details</p>
          </div>
          <form
            className="logfom"
            action=""
            onSubmit={handleSubmit(submitDetails)}
          >
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              key={{}}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <p id="logpswrd">
              <NavLink>Forget Password?</NavLink>
            </p>
            <button id="login">Login</button>
          </form>
          <p id="logsignup">
            Not registered yet?{" "}
            <NavLink to="/register">Create an Account</NavLink>
          </p>
          <p style={{ color: "red" }}>{serverError}</p>
        </div>
      </div>
    </div>
    </>
  )

}

export default Login;
