<template>
    <div class="row">
        <ProductCard v-for="product in products" :product="product" :key="product.id"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '@/components/products/ProductCard';

export default {
  components: { ProductCard },
  computed: {
    ...mapGetters({
      products: 'products/products',
    }),
  },
};
</script>
