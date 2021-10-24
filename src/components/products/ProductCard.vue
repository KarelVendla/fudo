<template>
    <div class="card col-sm-6 col-md-4 col-lg-2 p-0">
        <div>
        <img v-if="product.image" :src="'/images/' + product.image" class="card-img-top mx-auto" alt="Lorem Picsum">
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div class="col-6" style="font-weight: 600;">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p v-if="product.category && product.category.name" class="m-0"><small>{{product.category.name}}</small></p>
                        <p v-if="product.net_weight"><small>Nt. Wt: {{product.net_weight}} kg</small></p>
                    </div>
                    <div v-if="product.supplier && product.supplier.logo" class="col-6">
                        <img :src="product.supplier.logo" :alt="product.name" style="width: 80px;">
                    </div>
                </div>
            </div>
            <div class="card-footer bg-transparent p-0 border-0">
                    <div class="text-center">
                        <h5 class="m-0"><strong>{{ product.price_kg }}€</strong><small>/ kg</small> </h5>
                    </div>
                    <ProductCounter class="mt-3 text-center" :product="product"/>
            </div>
        </div>
        </div>
</template>

<script>
import ProductCounter from './ProductCounter';

export default {
  components: { ProductCounter },
  props: {
    product: {},
  },
  computed: {},
  methods: {},
};
</script>
