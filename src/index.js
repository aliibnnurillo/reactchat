import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDD9aGtgjYUuOWMcrFdveZKInrPm6CFxZE",
  authDomain: "nurillo-chats.firebaseapp.com",
  projectId: "nurillo-chats",
  storageBucket: "nurillo-chats.appspot.com",
  messagingSenderId: "919148116818",
  appId: "1:919148116818:web:a4501b32207dbd9339188b",
  measurementId: "G-HBX35VVVW7",
});
export const Context = React.createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ firestore, auth, firebase }}>
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
