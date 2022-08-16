import React from "react"
import { Product } from "../../components"
import { client } from "../../lib/client"
import { findSearchItem } from "../../lib/utils"
import { useRouter } from "next/router"
const Search = ({ matchedProducts }) => {
  const router = useRouter()
  return (
    <div className="search_result_container">
      <div className="products-heading">
        <h2>
          Results for <span>"{router.query.slug}"</span>
        </h2>
      </div>
      <div className="products-container">
        {matchedProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const matchedProducts = products?.filter(
    (product) =>
      findSearchItem(product?.name, context.query.slug) ||
      findSearchItem(product?.details, context.query.slug)
  )
  return {
    props: { matchedProducts },
  }
}

export default Search
