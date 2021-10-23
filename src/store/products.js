import DataService from '@/services/data.service';
import { Product } from '@/store/models/models';

export default {
  namespaced: true,
  state: {
    productId: null,
    filters: {
      searchTerm: null,
    },
  },
  mutations: {
    updateFilterParams(state, props) {
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
      const query = Product.query();
      query.with(['supplier', 'category']);

      if (state.filters.searchTerm) {
        query.where((product) => product.name.toLowerCase().includes(state.filters.searchTerm.toLowerCase()));
      }

      return query.get();
    },
  },
};
