<template>
    <div class="quantity-selector">
        <button class="btn btn-default btn-number  p-0" @click="updateQuantity(quantity+1)" type="button">
            <i class="material-icons" style="color:black;">add</i>
        </button>
        <input class="text-center" type="number" name="quantity" :value="quantity" @input="updateQuantity(parseInt($event.target.value))">
        <button class="btn btn-default btn-number p-0" :disabled="quantity === 0" @click="updateQuantity(quantity-1)" type="button">
            <i class="material-icons" style="color:black;">remove</i>
        </button>
    </div>
</template>

<script>
export default {
  props: {
    quantityCart: {
      default: 0,
    },
    product: {},
  },
  data() {
    return {
      quantity: this.quantityCart,
    };
  },
  methods: {
    updateQuantity(quantity) {
      if (Number.isNaN(quantity)) quantity = 0;
      this.quantity = quantity;
      this.$store.commit('cart/updateProductQuantity', {
        id: this.product.id,
        quantity: quantity,
        total: this.product.price_kg * (quantity * this.product.net_weight),
        product: this.product,
        supplier_id: this.product.supplier ? this.product.supplier.id : null,
      });
      this.$emit('qty-updated-cart');
    },
  },
};
</script>
