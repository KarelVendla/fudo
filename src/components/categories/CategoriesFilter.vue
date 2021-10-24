<template>
    <div class="d-flex flex-row">
        <Multiselect class="mr-2" @input="updateFilters({ category_code: $event ? $event.code : $event })" v-model="category" select-label="Filter" deselect-label="Remove" track-by="name" label="name" placeholder="Filter by category" :options="categories" :allow-empty="true">
            <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></template>
        </Multiselect>
        <Multiselect @input="updateFilters({ supplier_id: $event ? $event.id : $event })" v-model="supplier" select-label="Filter" deselect-label="Remove" track-by="name" label="name" placeholder="Filter by supplier" :options="suppliers" :allow-empty="true">
            <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></template>
        </Multiselect>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      category: null,
      supplier: null,
    };
  },
  computed: {
    ...mapState({
      filters: (state) => state.products.filters,
    }),
    ...mapGetters({
      categories: 'categories/categories',
      suppliers: 'suppliers/suppliers',
    }),
  },
  methods: {
    updateFilters(params) {
      this.$store.commit('products/updateFilterParams', params);
    },
  },
};
</script>
