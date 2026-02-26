import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="main">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
