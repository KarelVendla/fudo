import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import { Product, Supplier, Category } from '@/store/models/models';
import products from '@/store/products';
import suppliers from '@/store/suppliers';
import categories from '@/store/categories';
import cart from '@/store/cart';

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Product);
database.register(Supplier);
database.register(Category);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  modules: {
    products,
    suppliers,
    categories,
    cart,
  },
  state: {},
  mutations: {},
  actions: {
    init({ dispatch }) {
      dispatch('products/getProducts');
      dispatch('suppliers/getSuppliers');
      dispatch('categories/getCategories');
    },
  },
});
