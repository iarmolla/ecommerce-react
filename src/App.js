import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrelandingView from "./Views/PrelandingView";
import ProductDescription from "./Views/ProductDescription";
import Cart from "./Views/Cart";
import "boxicons";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Views/Login";
import Men from "./Views/Men";
import Women from "./Views/Women";
import Technology from "./Views/Technology";
import Jewelery from "./Views/Jewelery";
import Purchase from "./Views/Purchase";
import Prelanding from "./containers/Prelanding";
import Landing from "./Views/Landing";

function Dashboard() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="" element={<Dashboard></Dashboard>}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="" element={<Prelanding></Prelanding>}></Route>
            <Route
              path="/description/:id"
              element={<ProductDescription></ProductDescription>}
            ></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/women" element={<Women></Women>}></Route>
            <Route
              path="/electronics"
              element={<Technology></Technology>}
            ></Route>
            <Route path="/jewelery" element={<Jewelery></Jewelery>}></Route>
            <Route path="/purchase" element={<Purchase></Purchase>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
