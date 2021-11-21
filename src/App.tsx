import React from "react";
import { Provider } from "react-redux";
import Notification from "./components/Notification";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Notification />
      <div className="App">app</div>
    </Provider>
  );
}

export default App;
