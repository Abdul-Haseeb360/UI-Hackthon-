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

export interface SearchProduct {
  _id: string;
  title: string;
  productImage: any;
  slug: {
    current: string;
  };
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

export interface Products {
  _id: string;
  title: string;
  description: string;
  productImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  price: number;
  tags?: string[];
  dicountPercentage?: number;
  isNew?: boolean;
}

export interface ProductCart {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
