import clsx from "clsx";
import NavBar from "../../components/organisms/nav-bar";
import AsideBar from "../../components/molecules/aside";
import "./layout-1.scss";
const DashboardLayout = ({ flow, children }) => {
  return (
    <div>
      <NavBar />
      <div className="layout-wrapper">
        <aside className="aside">
          <AsideBar />
        </aside>
        <div
          className={clsx(
            "h-screen mt-[0.8rem]",
            flow ? "overflow-auto" : "overflow-hidden"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
