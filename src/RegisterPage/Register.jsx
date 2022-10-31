import "./register.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";


const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});

const Register = () => {
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    axios
      .post("https://miniblogskillup.herokuapp.com/api/users/register", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        setTimeout(() => navigate("/login"), 2000);
        toast.success(response.data.message, {
          transition: bounce,
          hideProgressBar
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          transition: bounce,
          hideProgressBar
        });

      });
  };

  return (
    <main className="register-wrapper">
      <div className="register">
        <section className="register-banner">
          <NavLink to="/">SkillUp Africa Blog</NavLink>

          <div className="banner-text">
            <h2>The Ancient city of Rome and the history of the great city.</h2>
            <span>
              <h3>Olive Junior</h3>
              <h4>Lead Writer, SkillUp Africa</h4>
            </span>
          </div>
        </section>

        <section className="form-wrapper">
          <div className="register-form">
            <div className="form-title">
              <h2>Create an account</h2>
              <p>Let’s start a journey to great articles</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register("userName", {
                  required: true,
                  maxLength: 30,
                })}
              />
              <p id="text">
                {errors.username?.type === "required" &&
                  "Your name is required"}
              </p>
              <p id="text">
                {errors.username?.type === "maxLength" &&
                  "Your name is should not be more than 30 characters long"}
              </p>

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <p id="text">
                {errors.email?.type === "required" &&
                  "Please enter an email address"}
              </p>
              <p id="text">
                {errors.email?.type === "pattern" &&
                  "Your email address is not valid"}
              </p>

              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
              <p id="text">
                {errors.password?.type === "required" &&
                  "Please enter a password"}
              </p>
              <p id="text">
                {errors.password?.type === "pattern" &&
                  "Password must contain letters,Uppercase, Numbers, special character and should not be less than 6 and more than 15 characters"}
              </p>

              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
              <p id="text">
                {errors.confirmPassword?.type === "validate" &&
                  "Password does not match"}
              </p>

              <br />
              <button type="submit">Create an account</button>
            </form>

            <p>
              Already have an account? <NavLink to="/login">Log in</NavLink>
            </p>
          </div>
        </section>
      </div>
      <ToastContainer transition={bounce} />
    </main>
  );
};

export default Register;
