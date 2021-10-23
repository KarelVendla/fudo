export default {
  namespaced: true,
  state: {
    total: null,
    productCount: null,
    products: {},
  },
  mutations: {
    total(state, total) {
      state.total = total;
    },
    productCount(state, productCount) {
      state.productCount = productCount;
    },
    products(state, products) {
      state.products = products;
    },
    updateProductQuantity(state, payload) {
      state.products[payload.id] = { quantity: payload.quantity, total: payload.total, product: payload.product };
      /* eslint-disable */
      let totalQty = 0;
      let total = 0;
      for (const [key, value] of Object.entries(state.products)) {
        totalQty += value.quantity;
        total += value.total;
      }
      state.productCount = totalQty;
      state.total = Math.round(total * 100) / 100;
    },
  },
  getters: {},
};
