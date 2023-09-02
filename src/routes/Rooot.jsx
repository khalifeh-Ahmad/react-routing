import {Outlet} from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Rooot = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="main">
        <Outlet/></div>
      <Footer/>
    </div>
  )
}

export default Rooot
