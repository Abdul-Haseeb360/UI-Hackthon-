import { client } from "@/sanity/lib/client";

// Fetch all products with pagination
export async function fetchProducts(page: number = 1, limit: number = 8) {
  const start = Math.max(0, (page - 1) * limit);
  const end = start + limit;

  const query = `{
    "products": *[_type == "product"] | order(_createdAt desc) [${start}...${end}] {
      _id,
      title,
      description,
      price,
      productImage,
      tags,
      isNew
    },
    "total": count(*[_type == "product"])
  }`;

  try {
    const { products, total } = await client.fetch(query);
    return { products, total };
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return { products: [], total: 0 };
  }
}

// ✅ Fetch a single product by ID
export async function fetchProductById(id: string) {
  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    title,
    description,
    price,
    productImage,
    tags,
    isNew
  }`;

  try {
    const product = await client.fetch(query, { id });
    return product || null;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return null;
  }
}
