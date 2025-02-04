import { client } from "@/sanity/lib/client"

export async function fetchProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    description,
    price,
    productImage,
    tags,
    isNew
  }`

  const products = await client.fetch(query)
  return products
}




export async function fetchProductById(id: string) {
  // Log the ID to ensure it's passed correctly
  console.log("Fetching product by ID:", id);

  // Sanity query to fetch a product by ID
  const query = `*[_type == "product" && _id == $id][0]`;
  const product = await client.fetch(query, { id });

  if (!product) {
    console.error(`No product found with ID: ${id}`);
  }

  return product;
}




