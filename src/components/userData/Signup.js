/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Apple, FacebookRounded, Google } from "@mui/icons-material";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import './style/Login.css'
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      navigate("/profile")
    }
  });

  //signup
  const signupUser = async (e) => {
    e.preventDefault();
    
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      console.log(errorMessage);
    });
    navigate("/");

    // const promise = account.create(
    //   uuidv4(),
    //   user.email,
    //   user.password,
    //   user.name
    // );

    // promise.then(
    //   function (res) {
    //     console.log(res); //success
    //     navigate("/profile");
    //   },
    //   function (err) {
    //     console.log(err); //fail
    //   }
    // );
  };

  // const signupWithGoogle = async (e) => {
    // account.createOAuth2Session("google");
  // };
  return (
    <>
      <div className="login-element-container">
        <h1>Sign Up</h1>
        <div >
          <form className="login-form-container" onSubmit={() => console.log('submitted')}>
            <div>
              <label className="titleLabel-login">Username</label>
              <input className="input-form-login" onChange={(e) => {setUser({...user, name: e.target.value});}} type="text"/>
            </div>
            <div>
              <label className="titleLabel-login">Email address</label>
              <input className="input-form-login" onChange={(e) => {setUser({...user, email: e.target.value})}} type="email"/>
            </div>
            <div>
              <label className="titleLabel-login">Password</label>
              <input className="input-form-login" onChange={(e) => {setUser({...user, password: e.target.value})}} type="password"/>
            </div>
            <Link className="DonthaveAccountSignUp" to="/signup">Already have Account, Login</Link>
            <br/>
            <div>
              <input className="login-submit-btn" onClick={signupUser} type={"submit"}/>
            </div>
            <br/>
            <p>Or continue with</p>
            <div className="login-socialmedia-btns">
              <div className="login-socialmedia-btn-btn">
                <FacebookRounded/>
              </div>
              <div className="login-socialmedia-btn-btn">
                <Google/>
              </div>
              <div className="login-socialmedia-btn-btn">
                <Apple/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
