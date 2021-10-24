<template>
    <div class="row justify-content-between">
        <CategoriesFilter class="col-lg-4"/>
        <input class="col-lg-7 search-field" @input="updateFilters({ searchTerm: $event.target.value })" type="text" placeholder="Search for a product"/>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CategoriesFilter from '../categories/CategoriesFilter';

export default {
  components: { CategoriesFilter },
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
