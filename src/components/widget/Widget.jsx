import "./Widget.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "#6272a4", backgroundColor: "#8be9fd" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all Orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "#6272a4", backgroundColor: "#ffb86c" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: false,
        link: "View Earning",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "#6272a4", backgroundColor: "#50fa7b" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: "#6272a4", backgroundColor: "#bd93f9" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">12312</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
