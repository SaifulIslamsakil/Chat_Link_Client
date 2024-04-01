import Banner from "@/Components/Banner";
import Feature from "@/Components/Feature";
import Navbar from "@/Components/Navbar";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto space-y-3">
      <Banner></Banner>
      <Feature></Feature>
    </div>
  );
};

export default Home;