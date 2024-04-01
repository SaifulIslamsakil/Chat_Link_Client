import Banner from "@/Components/Banner";
import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";
import Messges from "@/Components/Messges";
import Navbar from "@/Components/Navbar";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto ">
      <Navbar></Navbar>
      <Banner></Banner>
      <Feature></Feature>
      <Messges></Messges>
      <Footer></Footer>
    </div>
  );
};

export default Home;