import Head from "@/app/Components/Head";
import Navbar from "./Components/General-Navbar";
import HeroSection from "./Components/HeroSection";
import ShopCards from "./Components/Fashion-Categories";
import ProductCard from "./Components/Product-Card-10";
import ClassicProduct from "./Components/Classic-Product";
import FeaturedPosts from "./Components/Featured-Posts";
import Footer from "./Components/Footer";
import { products } from "@/constant/data";
import NeuralUniverse from "./Components/NeuralUniverse";


export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Head bgColor="bg-slate-900" />
      <Navbar />
      <HeroSection />
      <ShopCards />
      <ProductCard hideText={false} products={products} />
      <ClassicProduct />
      <NeuralUniverse/>
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
