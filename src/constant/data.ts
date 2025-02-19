import { Product } from "@/types";
import { Company } from "@/types";
import { Mail, MapPin, Phone } from "lucide-react";
import { FAQItem } from "@/types/index";

export const products: Product[] = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/1.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/2.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/3.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/4.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/5.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/6.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/7.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    image: "/images-v2/8.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

export const items = [
  { id: 1, src: "/images-v2/9.png", title: "CLOTHS", count: "5 Items" },
  { id: 2, src: "/images-v2/10.png", title: "CLOTHS", count: "5 Items" },
  { id: 3, src: "/images-v2/11.png", title: "CLOTHS", count: "5 Items" },
  { id: 4, src: "/images-v2/12.png", title: "CLOTHS", count: "5 Items" },
  { id: 5, src: "/images-v2/13.png", title: "CLOTHS", count: "5 Items" },
];

export const defaultCompanies: Company[] = [
  { name: "Hooli", url: "/images-v2/hooli.png" },
  { name: "Lyft", url: "/images-v2/lyft.png" },
  { name: "Feather", url: "/images-v2/mercadoLibre.png" },
  { name: "Stripe", url: "/images-v2/stripe.png" },
  { name: "AWS", url: "/images-v2/aws.png" },
  { name: "Reddit", url: "/images-v2/reddit.png" },
];
export const stats = [
  { number: "15K", text: "Happy Customers" },
  { number: "150K", text: "Monthly Visitors" },
  { number: "15", text: "Countries Worldwide" },
  { number: "100+", text: "Top Partners" },
];

export const contactCards = [
  {
    icon: Phone,
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    variant: "default",
  },
  {
    icon: MapPin,
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    variant: "dark",
  },
  {
    icon: Mail,
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    variant: "default",
  },
];

export const posts = [
  {
    image: "/images-v2/road.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    image: "/images-v2/car.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    image: "/images-v2/umbrailla.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

export const teamMembers = [
  {
    id: 1,
    image: "/images-v2/memeber1.png", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
  {
    id: 2,
    image: "/images-v2/memeber2.png", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
  {
    id: 3,
    image: "/images-v2/memeber3.jpg", // Replace with actual image path
    name: "Username",
    profession: "Profession",
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: 2,
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
  {
    id: 3,
    question: "the quick fox jumps over the lazy dog",
    answer:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  },
];
