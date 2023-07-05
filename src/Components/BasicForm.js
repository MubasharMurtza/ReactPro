import React, { useState } from "react";
import "../index.css"

function BasicForm() {
    const [user, setuser] = useState("")
    const [pass, setPass] = useState("")
  return (
    <>
      <div className="background">
        <form action="">
          <div>
            <label>User Name</label>
            <input type="text" name="userName" id="userName" autoComplete="off" value={user} onChange={(e) => setuser(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" autoComplete="off" value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default BasicForm;
