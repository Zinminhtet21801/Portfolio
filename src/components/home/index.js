import "./home.css";
import Header from "../header";
import Body from "../body";
import Footer from "../footer"
const index = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
