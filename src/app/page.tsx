import Head from "@/app/Components/Dark-navbar"
import Navbar from "./Components/Light-navbar";
import HeroSection from "./Components/HeroSection";
import ShopCards from "./Components/Fashion-Categories";
import ProductCard from "./Components/Product-Card-10";
import ClassicProduct from "./Components/Classic-Product";
import FeaturedPosts from "./Components/Featured-Posts";
import Footer from "./Components/Footer";


interface Product {
  id: number;
  name: string;
  department: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  colors: string[];
}


export default function Home() {

  const products: Product[] = [
    {
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/1.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/2.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/3.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/4.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/5.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/6.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/7.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      image: "/Images/8.png",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];


  return (
    <div>
      <Head bgColor="bg-slate-900" />
      <Navbar/>
      <HeroSection/>
      <ShopCards/>
      <ProductCard hideText={false} products={products} />
      <ClassicProduct/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
}
