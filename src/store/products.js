import DataService from '@/services/data.service';
import { Product } from '@/store/models/models';

export default {
  namespaced: true,
  state: {
    productId: null,
    filters: {
      searchTerm: null,
      category_code: null,
    },
  },
  mutations: {
    updateFilterParams(state, props) {
      console.log(props);
      state.filters = { ...props };
    },
  },
  actions: {
    getProducts() {
      const products = DataService.getProducts();
      Product.create({ data: products });
    },
  },
  getters: {
    products(state) {
      const query = Product.query().withAllRecursive();

      if (state.filters.searchTerm) {
        query.where((product) => product.name.toLowerCase().includes(state.filters.searchTerm.toLowerCase()));
      }

      if (state.filters.category_code) {
        query.where((product) => product.category_code === state.filters.category_code);
      }

      if (state.filters.supplier_id) {
        query.where((product) => product.supplier_id === state.filters.supplier_id);
      }

      return query.get();
    },
  },
};
