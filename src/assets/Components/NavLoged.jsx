//Maja

import { getAuth } from "@firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavLoged() {
  const auth1 = getAuth(); // Initialize auth1 before using it
  const url = `https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app/users/${auth1.currentUser?.uid}.json`;
  const [name, setName] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await fetch(url);
      const userData = await response.json();

      if (userData) {
        setName(userData.name);
      }
    }
    getUser();
  }, [auth1.currentUser, url]);
  return (
    <nav>
      <NavLink to="/">
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/Logo.svg?alt=media&token=81cdac67-e9ce-40fd-84cd-d5c1dcffb50a"
          alt=""
        />
      </NavLink>
      <NavLink to="/profile">
        <div className="profileLoged">
          <p className="userNameNav">{name}</p>
          <img
            className="userProfile"
            src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/%E2%98%BA.svg?alt=media&token=3d7a86b9-6440-4574-b0ec-736fefab5bcc"
            alt=""
          />
        </div>
      </NavLink>
    </nav>
  );
}
