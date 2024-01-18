import React, { useContext } from 'react'
import { ShopContext } from './../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Discription from '../Components/Discription/Discription';
import RelatedProduct from './../RelatedProduct/RelatedProduct';

const Product = () => {
  const { contextValue } = useContext(ShopContext);
  const { all_product } = contextValue;

  const { productId } = useParams();
  // console.log(productId)
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Discription product={product} />
      <RelatedProduct />
    </div>
  )
}

export default Product