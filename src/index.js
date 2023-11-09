import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // Redux의 Provider를 import
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";

// store를 export해줘야 PersistGate가 store를 못읽음.
export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* PersistGate-> Persist store가 redux에 저장될 때까지 앱 UI 랜더링이 지연 */}
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
  // document.getElementById("root")
);

reportWebVitals();
