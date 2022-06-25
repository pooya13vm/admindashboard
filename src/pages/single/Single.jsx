import "./Single.scss";
import Chart from "../../components/chart/Chart";
import DataTable from "../../components/dataTable/DataTable";

const Single = () => {
  return (
    <div className="single">
      <div className="top">
        <div className="left">
          <div className="editBtn">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEUd4DM4HcfROPWCX3NELmAT352vWREQbBZpAyZO0FA&s"
              className="itemImg"
              alt="user image"
            />
            <div className="details">
              <h3 className="itemTitle">Pooya vaghef</h3>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemvalue">contact@pooyav.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone</span>
                <span className="itemvalue">05368146944</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Adress:</span>
                <span className="itemvalue">2, bahatin ave Afyon Turkey</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemvalue">Iran</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending (Last six months)" />
        </div>
      </div>
      <div className="bottom">
        <h3 className="title">Last Transactions</h3>
        <DataTable />
      </div>
    </div>
  );
};

export default Single;
