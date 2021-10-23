<template>
    <div class="row justify-content-center">
        <input class="col-lg-8 search-field" @input="updateFilters({ searchTerm: $event.target.value })" type="text" placeholder="Search for a product"/>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchSelect: null,
    };
  },
  computed: {
    ...mapState({
      filters: (state) => state.products.filters,
    }),
    ...mapGetters({
      productSearchSuggestions: 'products/searchSuggestions',
      products: 'products/products',
    }),
  },
  methods: {
    updateFilters(params) {
      this.$store.commit('products/updateFilterParams', params);
    },
  },
};
</script>
