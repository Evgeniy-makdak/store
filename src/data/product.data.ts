import { ProductModel } from '../product.model';

export const fetchProductData = async (): Promise<ProductModel[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    const products: ProductModel[] = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
};

export const productListData: ProductModel[] = [];