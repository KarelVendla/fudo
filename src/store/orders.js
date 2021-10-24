import { Order } from '@/store/models/models';

export default {
  namespaced: true,
  state: {
    currentId: 0,
    orderId: null,
  },
  mutations: {
    orderId(state, orderId) {
      state.orderId = orderId;
    },
  },
  actions: {
    createOrder(state, payload) {
      Order.insert({
        data: [
          {
            id: state.currentId + 1,
            status: 'pending',
            delivered_at: 'to be determined',
            messages: null,
            supplier_id: payload.supplier.id,
            total_cost: payload.total_cost,
            products: payload.products,
          },
        ],
      });
      return true;
    },
  },
  getters: {
    orders() {
      return Order.query().with(['supplier']).get();
    },
  },
};
