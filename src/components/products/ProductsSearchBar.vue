<template>
    <div class="row justify-content-between searchbar">
        <CategoriesFilter class="col-lg-6"/>
        <div class="col-lg-6">
        <i class="material-icons">search</i>
        <input class="col-lg-12 search-field" @input="updateFilters({ searchTerm: $event.target.value })" type="search" placeholder="Search for a product"/>
        </div>
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
