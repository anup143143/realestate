import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export const Layout = () => {
  return (
    <>
        <ScrollToTop />

        <Outlet />
    </>
  );
};

export default Layout;