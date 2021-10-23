import DataService from '@/services/data.service';
import { Category } from '@/store/models/models';

export default {
  namespaced: true,
  state: {
    productId: null,
  },
  actions: {
    getCategories() {
      const categories = DataService.getCategories();
      Category.create({ data: categories });
    },
  },
  getters: {
    categories() {
      Category.all();
    },
  },
};
