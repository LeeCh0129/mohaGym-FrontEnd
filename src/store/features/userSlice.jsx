import { createSlice } from "@reduxjs/toolkit";

const name = "UserSlice";

// state의 초기값 (유저 정보)
const initialState = {
  user_id: null,
  email: "",
  password: "", // 실제 암호화된 비밀번호
  profile: {
    profile_image: "",
    name: "",
    birthday: "",
    phone_no: "",
    sex: "",
  },
};

// userSlice라는 이름으로 유저 Slice 생성
export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    // setUser 액션은 사용자의 모든 정보를 업데이트
    setUser: (state, action) => {
      state.user_id = action.payload.user_id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.profile.profile_image = action.payload.profile_image;
      state.profile.name = action.payload.name;
      state.profile.birthday = action.payload.birthday;
      state.profile.phone_no = action.payload.phone_no;
      state.profile.sex = action.payload.sex;
    },
    // setUserName 액션은 사용자 이름만 업데이트
    setUserName: (state, action) => {
      state.profile.name = action.payload.name;
    },
    // 사용자 정보 업데이트 시 dispatch 함수를 사용하여 액션을 디스패치.
  },
});

// actions, dispatch로 액션을 전달해 상태를 어떻게 변화시킬지를 결정함.
export const { setUser, setUserName } = userSlice.actions;

// reducer
export default userSlice.reducer;
