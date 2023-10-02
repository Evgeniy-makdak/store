import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../product.model';

export class ProductApiService {
  static async fetchProductsApi(): Promise<ProductModel[]> {
    try {
      const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
      return response.data;
    } catch (error) {
      throw new Error(`Something went wrong! Error: ${error}`);
    }
  }
}