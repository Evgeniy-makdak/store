import { useState, useEffect } from 'react';
import { ProductApiService } from './services/product-api.service';
import { ProductModel } from './product.model';

export function useProducts() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  async function fetchProducts() {
    try {
      const data = await ProductApiService.fetchProductsApi();
      console.log('API Response:', data);
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

  return { products, loading, error };
}