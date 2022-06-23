import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">container</div>
    </div>
  );
};

export default Home;
