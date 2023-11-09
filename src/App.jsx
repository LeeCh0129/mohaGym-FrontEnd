// import "./App.css";
// import AppHeader from "./Components/AppHeader/AppHeader";
// import SideMenu from "./Components/SideMenu/SideMenu";
// import PageContent from "./Components/PageContent/PageContent";
// import AppFooter from "./Components/AppFooter/AppFooter";

// function App() {
//   return (
//     <div className="App">
//       <AppHeader />
//       <div className="SideMenuAndPageContent">
//         <SideMenu></SideMenu>
//         <PageContent></PageContent>
//       </div>
//       <AppFooter />
//     </div>
//   );
// }
// export default App;
import React, { useState } from "react";
import AppHeader from "./Components/AppHeader/AppHeader";
import SideMenu from "./Components/SideMenu/SideMenu";
import PageContent from "./Components/PageContent/PageContent";
import AppFooter from "./Components/AppFooter/AppFooter";
import LoginComponent from "./Components/LoginComponent";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 가짜 로그인 함수. 현재 상태의 반대로 토글합니다.
  const fakeLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // 로그인 상태에 따라 컴포넌트를 조건부로 렌더링합니다.
  if (!isLoggedIn) {
    return (
      <div className="App">
        {/* 로그인 페이지 레이아웃 */}
        <LoginComponent onLogin={fakeLogin} />
      </div>
    );
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
