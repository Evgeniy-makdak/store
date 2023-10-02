import { FC } from 'react';
import { ProductModel } from '../../../product.model';

type ProductListProps = {
  products: ProductModel[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  console.log('Products in ProductList:', products);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;