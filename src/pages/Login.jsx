import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/");
    } else {
      alert("Invalid Email or password!");
    }

    function checkUser() {
      console.log(allUsers);
      let user = allUsers.AllUsers.filter(
        (user) => user.email == currentUser.email
      );
      if (user.length > 0) return true;
    }
  };

  return (
    <div className="loginForm">
      <h5>Login</h5>
      <form>
        <input id={"email"} type="email" placeholder="Email Address" />

        <input id={"password"} type={"password"} placeholder="Password" />
        <Link to="/register">
          <p>Create new account</p>
          <br></br>
        </Link>
        <br></br>
        <button type="button" onClick={handelSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
