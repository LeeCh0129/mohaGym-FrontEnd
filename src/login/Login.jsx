import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";
import LoginComponent from "../Components/LoginComponent";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import axiosMock from "./AxiosMock";
// import MockAdapter from "axios-mock-adapter";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      // 서버에 로그인 요청을 보내고 사용자 정보를 받아옴.
      // const response = await axios.post("/api/login", { email, password });
      const response = await axios.post("/api/mock-login", { email, password });
      console.log("Mock 응답:", response.data);
      // Redux 스토어에 사용자 정보를 저장
      dispatch(setUser(response.data));

      //로그인 성공 후 /home링크로 이동
      navigate("/home");
      // 로그인 성공 후 이후 홈페이지로 이동하거나 다른 작업 수행 코드작성하면 됨.
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <div>
      <LoginComponent onLogin={handleLogin} />
    </div>
  );
}
