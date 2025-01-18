import sanityClient from '@/lib/sanityClient';
import { Products } from '@/types/index';

export async function fetchProducts(): Promise<Products[]> {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    productImage{
      asset->{
        url
      }
    },
    price,
    tags,
    dicountPercentage,
    isNew
  }`;

  try {
    const products: Products[] = await sanityClient.fetch(query);
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}
