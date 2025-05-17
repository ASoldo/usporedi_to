export default defineEventHandler(async () => {
  const baseUrl =
    "https://vdcdn384.api.sanity.io/v2025-05-17/data/query/production";

  const query = `*[_type == "product" && name match "Krema za*"] {
    name,
    current_price,
    previous_price,
    retailer-> {
      name,
      slug
    },
    categories[]-> {
      title
    }
  }`;

  const encodedQuery = encodeURIComponent(query);

  const response = await fetch(`${baseUrl}?query=${encodedQuery}`);
  const data = await response.json();

  if (!response.ok) {
    return { message: `Error: ${response.statusText}` };
  }

  const products = data.result.map((product: any) => ({
    name: product.name,
    current_price: product.current_price,
    previous_price: product.previous_price,
    retailer: product.retailer,
    categories: product.categories,
  }));

  return {
    message: "Success: Products fetched from Sanity",
    products,
  };
});
