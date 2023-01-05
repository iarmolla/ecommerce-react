import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, redirect } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Login from "./containers/Login";
import JeweleryContainer from "./containers/Jewelery";
import Purchase from "./Views/Purchase";
import Prelanding from "./containers/Prelanding";
import Description from "./containers/Description";
import Men from "./containers/Men";
import Women from "./containers/Women";
import Techonology from "./containers/Technology";
import Cart from "./containers/Cart";
import Landing from "./Views/Landing";
import Error from "./Views/Error";
import Register from "./Views/Register";

function Dashboard() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    let aux = window.localStorage.getItem("loggedUser");
    setUser(JSON.parse(aux))
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="" element={<Dashboard></Dashboard>}>
            <Route path={ user ? "" : "/login"} element={user ? <Prelanding></Prelanding> : <Login/>}></Route>
            <Route path="" element={<Prelanding></Prelanding>}></Route>
            <Route
              path="/description/:id"
              element={<Description></Description>}
            ></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/women" element={<Women></Women>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route
              path="/electronics"
              element={<Techonology></Techonology>}
            ></Route>
            <Route
              path="/jewelery"
              element={<JeweleryContainer></JeweleryContainer>}
            ></Route>
            <Route path="/purchase" element={<Purchase></Purchase>}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
