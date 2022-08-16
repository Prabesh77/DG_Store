import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData, popularData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Products everyone is loving.</p>
    </div>

    <div className="products-container-best-seller">
      {popularData?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />

    <div className="products-heading">
      <h2>Our Other Products</h2>
      <p>Check out our all products. Continuesly adding up!</p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const popularQuery = '*[_type == "best_selling_products"]';
  const popularData = await client.fetch(popularQuery);

  return {
    props: { products, bannerData, popularData }
  }
}

export default Home;
