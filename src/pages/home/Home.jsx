import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TableComponent from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last six months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
