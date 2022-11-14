import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
// import Footer from "../../components/footer/Footer";
import Header from "../components/Header";
// import MailList from "../../components/mailList/MailList";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex flex-col items-center justify-between mx-14 my-16">
        <Featured />
        <h1 className="w-5xl text-xl font-bold mt-6 self-start ml-6">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="w-5xl text-xl font-bold mt-6 self-start ml-6">
          Homes guests love
        </h1>
        <FeaturedProperties />
        {/* <MailList /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
