import { useEffect, useState } from 'react';
import { ProductApiService } from '../../../services/product-api.service';
import { ProductModel } from '../../../product.model';
import ProductList from './product-list.component';

const ProductListContainer: React.FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  async function fetchProducts() {
    try {
      const data = await ProductApiService.fetchProductsApi();
      setProducts(data);
    } catch (e) {
      setError(`Something went wrong! Error: ${e}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log({ products })
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default ProductListContainer;