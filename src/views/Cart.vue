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
                </tr>
            </thead>
            <tbody>
                <tr v-for="cardProduct in cartProducts" :key="cardProduct.id">
                    <td>{{ cardProduct.product.name }}</td>
                    <td><ProductCounter :product="cardProduct.product" :quantityCart="cardProduct.quantity"/></td>
                    <td>{{ Math.round(cardProduct.product.price_kg * cardProduct.product.net_weight * 100) / 100 }}€ /kg</td>
                    <td>{{ cardProduct.total }}€</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductCounter from '../components/products/ProductCounter';

export default {
  name: 'cart',
  components: { ProductCounter },
  computed: {
    ...mapState({
      productCount: (state) => state.cart.productCount,
      total: (state) => state.cart.total,
      cartProducts: (state) => state.cart.products,
    }),
  },
};
</script>
