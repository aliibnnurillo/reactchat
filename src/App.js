import "./App.css";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/AppRouter";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from ".";
import Loader from "./components/Loader";

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
