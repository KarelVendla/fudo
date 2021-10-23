<template>
    <div class="container mt-5">
        <ProductsSearchBar/>
        <ProductsList class="mt-5"/>
    </div>
</template>

<script>
import ProductsList from '@/components/products/ProductsList.vue';
import ProductsSearchBar from '@/components/products/ProductsSearchBar.vue';

export default {
  name: 'products',
  components: { ProductsList, ProductsSearchBar },
};
</script>
