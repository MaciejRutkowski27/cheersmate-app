//Maja

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/Logo.svg?alt=media&token=81cdac67-e9ce-40fd-84cd-d5c1dcffb50a"
          alt=""
        />
      </NavLink>
      <NavLink to="/signup">
        <img
          className="userProfile"
          src="https://firebasestorage.googleapis.com/v0/b/webapp-exam-f3829.appspot.com/o/profileIconWhole.svg?alt=media&token=7dc9fcd8-a8c9-4f59-b17e-2679c57338c7"
          alt=""
        />
      </NavLink>
    </nav>
  );
}
