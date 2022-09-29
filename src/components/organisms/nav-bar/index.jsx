import Button from "../../atoms/button";
import InputField from "../../atoms/input";
import CaretDown from "../../atoms/vectors/caret-down";
import WalletIcon from "../../atoms/vectors/wallet-icon";
import NavTab from "../../molecules/nav-tab";
import "./nav-bar.scss";

const NavBar = () => {
  const statusArr = [
    {
      title: "Volume 24h",
      value: "105.717 Eth",
    },
    {
      title: "Volume total",
      value: "26.306.477 Eth",
    },
    {
      title: "Eth/USD",
      value: "$357.60",
    },
    {
      title: "Ethereum Network",
      value: "3,009 TPS",
    },
  ];
  return (
    <nav>
      <div className="nav-status center">
        <div></div>
        <div className="flex gap-x-[1rem]">
          {statusArr.map(({ title, value }) => (
            <div key={title}>
              <span className="nav-status-title">{title}:</span>
              <span className="nav-status-value">{value}</span>
            </div>
          ))}
        </div>

        <span className="nav-select">
          English <CaretDown />
        </span>
      </div>
      <div className="main-nav center">
        <img src="/images/Cloudax_Light_logo.png" alt="nav-logo" />
        <div className="nav-tab">
          <InputField />
          <NavTab />
        </div>
        <Button title="Connect Wallet" prefix={<WalletIcon />} outline />
      </div>
    </nav>
  );
};

export default NavBar;
