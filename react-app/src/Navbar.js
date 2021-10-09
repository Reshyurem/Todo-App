import { useState } from "react";

function Navbar() {
  const [loginID, setLoginID] = useState("Noob");

  const handleLogin = (ID) => {
    setLoginID(ID);
    document.getElementsByClassName("login")[0].style.display = "none";
  };

  return (
    <nav className="navbar">
      <h1>DEADlines</h1>
      <div className="login">
        <input type="text" id="loginID" />
        <button
          onClick={() => handleLogin(document.getElementById("loginID").value)}
        >Set UserName</button>
      </div>
      <div className="links">
        <span className="userID">{loginID}</span>
        <a href="/overall" className="active">
          Overall
        </a>
        <a href="/OSN">OSN</a>
      </div>
    </nav>
  );
}

export default Navbar;
