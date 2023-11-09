import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "./features/userSlice";
// ... (이하 동일)

// combineReducers -> Redux에서 여러 개의 리듀서를 하나로 결합하는 함수
const reducers = combineReducers({
  user: userReducer,
});

// persist를 사용하여 Redux 상태의 영구 저장(persistence)을 구성하는 객체
const persistConfig = {
  key: "root",
  storage, // localStorage에 저장
};

// persistReducer-> Redux 상태의 영구 저장을 처리하기 위한 함수, Redux 상태를 로컬 스토리지에 저장하기 위한 설정
const persistedReducer = persistReducer(persistConfig, reducers);

//스토어를 설정하고 생성하는 부분
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
