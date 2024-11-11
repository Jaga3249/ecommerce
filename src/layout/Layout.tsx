import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[#FFFFFF] h-screen ">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
