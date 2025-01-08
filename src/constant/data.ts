import { Product } from "@/types";
import { Company } from "@/types";
import { Mail, MapPin, Phone } from "lucide-react";
export const products: Product[] = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/2.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/3.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/4.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/5.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/6.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/7.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images/8.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

export const items = [
  { id: 1, src: "/images/9.png", title: "CLOTHS", count: "5 Items" },
  { id: 2, src: "/images/10.png", title: "CLOTHS", count: "5 Items" },
  { id: 3, src: "/images/11.png", title: "CLOTHS", count: "5 Items" },
  { id: 4, src: "/images/12.png", title: "CLOTHS", count: "5 Items" },
  { id: 5, src: "/images/13.png", title: "CLOTHS", count: "5 Items" },
];


export const defaultCompanies: Company[] = [
  { name: "Hooli", url: "/images/hooli.png" },
  { name: "Lyft", url: "/images/lyft.png" },
  { name: "Feather", url: "/images/MercadoLibre.png" },
  { name: "Stripe", url: "/images/stripe.png" },
  { name: "AWS", url: "/images/aws.png" },
  { name: "Reddit", url: "/images/Reddit.png" },
];
export const stats = [
  { number: "15K", text: "Happy Customers" },
  { number: "150K", text: "Monthly Visitors" },
  { number: "15", text: "Countries Worldwide" },
  { number: "100+", text: "Top Partners" },
]


export const contactCards = [
  {
    icon: Phone,
    emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
    variant: 'default'
  },
  {
    icon: MapPin,
    emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
    variant: 'dark'
  },
  {
    icon: Mail,
    emails: ['georgia.young@example.com', 'georgia.young@ple.com'],
    variant: 'default'
  }
]

export const posts = [
  {
    image: "/images/Road.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    image: "/images/Car.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    image: "/images/Umbrailla.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
]

export const teamMembers = [
  {
    id: 1,
    image: "/images/Memeber1.png", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
  {
    id: 2,
    image: "/images/Memeber2.png", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
  {
    id: 3,
    image: "/images/Memeber3.jpg", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
];