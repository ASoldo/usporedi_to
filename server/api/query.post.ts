// export default defineEventHandler(async (event) => {
//   const baseUrl =
//     "https://vdcdn384.api.sanity.io/v2025-05-17/data/query/production";
//
//   const query = `*[_type == "product" && name match "${event.context.params?.query}"] {
//     name,
//     current_price,
//     previous_price,
//     retailer-> {
//       name,
//       slug
//     },
//     categories[]-> {
//       title
//     }
//   }`;
//
//   const encodedQuery = encodeURIComponent(query);
//
//   const response = await fetch(`${baseUrl}?query=${encodedQuery}`);
//   const data = await response.json();
//
//   if (!response.ok) {
//     return { message: `Error: ${response.statusText}` };
//   }
//
//   const products = data.result.map((product: any) => ({
//     name: product.name,
//     current_price: product.current_price,
//     previous_price: product.previous_price,
//     retailer: product.retailer,
//     categories: product.categories,
//   }));
//
//   return {
//     message: "Success: Products fetched from Sanity",
//     products,
//   };
// });

// server/api/query.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, category, retailer, min, max } = body

  const queryParts: string[] = []

  if (name) queryParts.push(`name match "${name}*"`)
  if (category) queryParts.push(`"${category}" in categories[]->title`)
  if (retailer) queryParts.push(`retailer->name == "${retailer}"`)
  if (min) queryParts.push(`current_price >= ${min}`)
  if (max) queryParts.push(`current_price <= ${max}`)

  const filter = queryParts.length > 0
    ? `[_type == "product" && ${queryParts.join(' && ')}]`
    : `[_type == "product"]` // fallback query

  const query = `*${filter} {
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
  }`

  const baseUrl = 'https://vdcdn384.api.sanity.io/v2025-05-17/data/query/production'
  const encoded = encodeURIComponent(query)
  const res = await fetch(`${baseUrl}?query=${encoded}`)
  const data = await res.json()

  if (!res.ok) {
    throw createError({ statusCode: 500, statusMessage: data.message || 'Query failed' })
  }

  return {
    message: 'OK',
    products: data.result
  }
})
