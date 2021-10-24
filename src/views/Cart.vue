<template>
    <div class="container mt-5">
        <h2>Cart</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-if="!reRender">
            <template v-for="(categoryProducts,index) in categorizeProductsBySupplier()">
                <tr>
                    <h5>{{ getSupplierById(index)['name'] }}</h5>
                </tr>
                <tr v-for="product in categoryProducts">
                    <td>{{ product.product.name }}</td>
                    <td><ProductCounter @qty-updated-cart="reRenderTable()" :product="product.product" :quantityCart="product.quantity"/></td>
                    <td>{{ Math.round(product.product.price_kg * product.product.net_weight * 100) / 100 }}€ /kg</td>
                    <td>{{ Math.round(product.total * 100) / 100 }}€</td>
                </tr>
                <tr>
                    <td  class="border-0"></td>
                    <td  class="border-0"></td>
                    <td  class="border-0"></td>
                    <td  class="border-0">
                        <span class="flex-">
                            <h5>Total: {{ getTotalCartSupplier(categoryProducts) }}€</h5>
                            <button class="btn btn-lg btn-primary float-end" @click="createOrder(getTotalCartSupplier(categoryProducts),getSupplierById(index),categoryProducts)">Check out</button>
                        </span>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ProductCounter from '../components/products/ProductCounter';
import { groupBy } from '@/utils/helpers';

export default {
  name: 'cart',
  components: { ProductCounter },
  data() {
    return {
      reRender: false,
    };
  },
  computed: {
    ...mapState({
      productCount: (state) => state.cart.productCount,
      total: (state) => state.cart.total,
      cartProducts: (state) => state.cart.products,
    }),
    ...mapGetters({
      suppliers: 'suppliers/suppliers',
    }),
  },
  methods: {
    createOrder(totalCost, supplier, products) {
      if (this.$store.dispatch('orders/createOrder', {
        total_cost: totalCost,
        supplier: supplier,
        products: products,
      })) {
        this.$store.dispatch('cart/removeFromCart', products);
        this.$router.push({ name: 'my-orders' });
      }
    },
    getTotalCartSupplier(products) {
      let total = 0;
      /* eslint-disable */
      products.map((product) => total += product.total);
      return Math.round(total * 100) / 100;
    },
    getSupplierById(supplierId) {
      const supplier = this.suppliers.find((supplier) => supplier.$id === supplierId)
      return supplier ? supplier : { name: 'Unknown' };
    },
    categorizeProductsBySupplier() {
      return groupBy(Object.values(this.cartProducts), 'supplier_id');
    },
    reRenderTable() {
      this.reRender = true;
      this.reRender = false;
    },
  },
};
</script>
