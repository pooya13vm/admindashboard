import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Parent.scss";

const Parent = () => {
  return (
    <div className="mainRout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Parent;
