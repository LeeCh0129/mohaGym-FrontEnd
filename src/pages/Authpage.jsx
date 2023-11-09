import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserName } from "../store/features/userSlice";

const Authpage = () => {
  // Redux 상태를 사용하여 원하는 데이터를 가져옴.
  const user = useSelector((state) => state.user);

  // useDispatch를 사용하여 디스패치 함수를 가져옴.
  const dispatch = useDispatch();

  // 사용자 정보를 변경하는 함수
  const updateUserInfo = () => {
    dispatch(
      setUser({
        user_id: 1,
        email: "chanho@example.com",
        password: "1234!",
        profile: {
          profile_image: "new_image_url",
          name: "chanho",
          birthday: "0129",
          phone_no: "01012345678",
          sex: "Man",
        },
      })
    );
  };

  const changeUserName = (newName) => {
    dispatch(setUserName({ name: newName }));
  };

  return (
    <div>
      <h3>
        User ID: {user.user_id}, Email: {user.email}
      </h3>
      <h3>Profile</h3>
      <ul>
        <li>Name: {user.profile.name}</li>
        <li>Birthday: {user.profile.birthday}</li>
        <li>Phone Number: {user.profile.phone_no}</li>
        <li>Sex: {user.profile.sex}</li>
      </ul>
      <button onClick={() => updateUserInfo()}>정보 변경</button>
      <button onClick={() => changeUserName("New User Name")}>이름 변경</button>
    </div>
  );
};

export default Authpage;
