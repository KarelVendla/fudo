<template>
    <div class="container mt-5">
        <h2>My orders</h2>
        <OrdersList/>
    </div>
</template>
<script>
import OrdersList from '@/components/orders/OrdersList.vue';

export default {
  name: 'orders',
  components: { OrdersList },
};
</script>
