import Head from "@/app/Components/Dark-navbar"
import Navbar from "./Components/Light-navbar";
import HeroSection from "./Components/HeroSection";
import ShopCards from "./Components/Fashion-Categories";
import ProductCard from "./Components/Product-Card-10";
import ClassicProduct from "./Components/Classic-Product";
import FeaturedPosts from "./Components/Featured-Posts";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Head bgColor="bg-slate-900" />
      <Navbar/>
      <HeroSection/>
      <ShopCards/>
      <ProductCard />
      <ClassicProduct/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
}
