/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Profile() {
  // const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [userImage, setUserImage] = useState('');

  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setUserDetails(user)
    setUserImage(user.photoURL)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    console.log(user);
    // ...
  }
});

  // useEffect(() => {
  //   const getData = account.get();
  //   getData.then(
  //     function (res) {
  //       setUserDetails(res);
  //       console.log(res);
  //     },
  //     function (err) {
  //       console.log(err);
  //     }
  //   );
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await account.deleteSession("current");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      {userDetails ? (
        <>
          <img alt="user pic" src={userImage} />
          {/* {console.log(userImage)} */}
          <h1>{userDetails.displayName}</h1>
          <p>{userDetails.email}</p>
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="">Login</span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Profile;
