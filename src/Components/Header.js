import React from "react";
import { Logo } from "../Utils/Constants";
import { auth } from "../Utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // console.log(user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        console.log("logged out");
      }
    });
    // return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b flex justify-between from-black w-screen pl-28 z-10">
      <img className="w-44 " alt="logo" src={Logo} />

      {currentUser && (
        <div className="flex mr-10 justify-between w-32 items-center p-1">
          <img
            alt="user_logo"
            className="w-10 h-10 rounded-lg"
            src={currentUser?.photoURL}
          ></img>
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
