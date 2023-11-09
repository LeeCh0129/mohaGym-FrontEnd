import React, { useState } from "react";
import "./LoginComponent.css";

export default function LoginComponent({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 입력한 이메일과 비밀번호를 부모 컴포넌트에 전달하여 로그인 처리
    onLogin(email, password);
  };

  return (
    <div className="login">
      <div className="login_box">
        <div className="left">
          <div className="image-container">
            <img src="/mohaji_logo.png" alt="Mohaji img" />
          </div>
        </div>
        <div className="right">
          {/* <h2>로그인</h2> */}
          <div className="title-logo">
            <img src="/mohaji_logo.png" alt="Title Logo" />
          </div>
          <input
            type="text"
            placeholder="Admin ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button onClick={handleLogin} className="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
