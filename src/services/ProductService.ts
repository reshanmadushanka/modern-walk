import axios from 'axios'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

class ProductService {
  private baseURL = 'https://fakestoreapi.com/products'
  async getFilteredProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(this.baseURL)
      return response.data.filter(
        (product) =>
          product.category === "men's clothing" || product.category === "women's clothing"
      )
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }
}

export default new ProductService()
