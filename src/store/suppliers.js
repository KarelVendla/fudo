import DataService from '@/services/data.service';
import { Supplier } from '@/store/models/models';

export default {
  namespaced: true,
  state: {
    productId: null,
  },
  actions: {
    getSuppliers() {
      const suppliers = DataService.getSuppliers();
      Supplier.create({ data: suppliers });
    },
  },
  getters: {
    suppliers() {
      return Supplier.all();
    },
  },
};
