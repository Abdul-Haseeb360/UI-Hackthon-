export interface Product {
  id: number;
  name: string;
  department: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  colors: string[];
}

export interface Company {
  name: string;
  url: string;
}

export interface OurClientProps {
  showText?: boolean;
  title?: string;
  description?: string;
  companies?: Company[];
}
export interface ProductCardProps {
  products: Product[]; 
  hideText?: boolean;
}