// src/AxiosMock.js

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

// 모의 데이터 설정
const mockUserData = {
  user_id: 1,
  email: "test@example.com",
  password: "hashed_password",
  profile_image: "profile.jpg",
  name: "Test User",
  birthday: "01/01/1990",
  phone_no: "123-456-7890",
  sex: "Male",
};

// 모의 로그인 요청 처리
mock.onPost("/api/mock-login").reply(200, mockUserData);

// 다른 모의 요청을 처리하는 코드를 추가할 수 있습니다.

export default mock;
