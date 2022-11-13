// import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
// import Footer from "../../components/footer/Footer";
import Header from "../components/Header";
// import MailList from "../../components/mailList/MailList";
import Navbar from "../components/Navbar";
// import PropertyList from "../../components/propertyList/PropertyList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex align-center gap-2 mt-6">
        {/* <Featured /> */}
        <h1 className="w-5xl text-xl">Browse by property type</h1>
        {/* <PropertyList /> */}
        <h1 className="w-5xl text-xl">Homes guests love</h1>
        {/* <FeaturedProperties />
        <MailList />
        <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
