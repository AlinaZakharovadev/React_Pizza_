import "../../scss/app.scss";
import Header from "../../components-pizza/header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
