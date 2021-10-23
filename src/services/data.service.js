import suppliers from '@/assets/json/suppliers.json';
import categories from '@/assets/json/categories.json';
import products from '@/assets/json/products.json';

class DataService {
  getProducts() {
    return products.products;
  }

  getSuppliers() {
    return suppliers.suppliers;
  }

  getCategories() {
    return categories.categories;
  }
}

export default new DataService();
