/* eslint-disable no-unused-vars */
import { Apple, FacebookRounded, Google } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style/Login.css'
// import { account } from "../../appwriteConfig";
import { useNavigate, redirect } from "react-router-dom";
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

function Login() {

  
  const [shoudINavigate, setShoudINavigate] = useState();
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
  
  const loginUser = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    setShoudINavigate(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    // try {
    //   await account.createEmailSession(user.email, user.password);
    //   navigate("/profile");
    // } catch (err) {
    //   console.log(err);
    // }
    // navigate("/profile");
  };

  const signupWithGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setShoudINavigate(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      navigate("/");

    // account.createOAuth2Session("google");
  };

  const signupWithFacebook = async (e) => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('fb token:', accessToken);
        setShoudINavigate(accessToken)

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
      navigate("/");
  }

  return (
    <>
    {
      shoudINavigate ? navigate('/') : null
    }
      <div className="login-element-container">
        <h1>Login</h1>
        <div >
          <form className="login-form-container" onSubmit={() => console.log('submitted')}>
            <div>
              <label className="titleLabel-login">Email address</label>
              <input className="input-form-login" onChange={(e) => {setUser({...user, email: e.target.value});}} type="email"/>
            </div>
            <div>
              <label className="titleLabel-login">Password</label>
              <input className="input-form-login" onChange={(e) => {setUser({...user, password: e.target.value});}} type="password"/>
            </div>
            <Link className="DonthaveAccountSignUp" to="/signup">Don't have Account, Sign Up</Link>
            <br/>
            <div>
              <input className="login-submit-btn" onClick={loginUser} type={"submit"}/>
            </div>
            <br/>
            <p>Or continue with</p>
            <div className="login-socialmedia-btns">
              <div onClick={signupWithFacebook} className="login-socialmedia-btn-btn">
                <FacebookRounded/>
              </div>
              <div onClick={signupWithGoogle} className="login-socialmedia-btn-btn">
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

export default Login;
