import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, redirect, useNavigate } from "react-router-dom";

const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};
const Register = () => {
  const [cookies, setCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);
  const [isRedirect, setRedirect] = useState("false");
  const [allUsersArray, setAllusersArray] = useState([]);
  const navigate = useNavigate();
  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (
      patterns.email.test(email) &&
      patterns.password.test(password) &&
      password == ConfirmPassword
    ) {
      if (checkEmail(email)) {
        let newUser = { email: email, password: password };
        setAllusersArray([...allUsersArray, newUser]);
        console.log(allUsersArray);
        setCookie("currentUser", newUser, { path: "/" });
        setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
        navigate("/");
      } else {
        alert("This Email is already used");
      }
    } else {
      alert("Invalid password or email pattern");
    }
  };

  function checkEmail(E) {
    let rightUser = allUsersArray?.filter((user) => {
      if (user.email == E) return true;
    });
    if (rightUser[0] == null) {
      return true;
    }

    return false;
  }

  return (
    <div className=" loginForm">
      <h5>Register</h5>
      <form>
        <div>
          <input id={"email"} type="email" placeholder="Email Address" />
        </div>

        <div>
          <input id={"password"} type="password" placeholder="Password" />
        </div>

        <div>
          <input
            id={"ConfirmPassword"}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <Link to="/login">
          <p>Already have an account?</p>
          <br></br>
        </Link>
        <br></br>
        <button type="button" onClick={handelSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
