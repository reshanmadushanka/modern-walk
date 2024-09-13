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

  async getFilteredProductsByCategory(
    category: string,
    sort: 'asc' | 'desc' = 'desc'
  ): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(
        `${this.baseURL}/category/${encodeURIComponent(category)}?sort=${sort}`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching products by category:', error)
      throw error
    }
  }

  async getLimitedProducts(limit: number = 8, sort: 'asc' | 'desc' = 'desc'): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(`${this.baseURL}?limit=${limit}&sort=${sort}`)
      return response.data.filter(
        (product) =>
          product.category === "men's clothing" || product.category === "women's clothing"
      )
    } catch (error) {
      console.error('Error fetching limited products:', error)
      throw error
    }
  }
}

export default new ProductService()
