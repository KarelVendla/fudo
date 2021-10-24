<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Delivery date</th>
                    <th>Supplier</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders">
                    <td>{{ order.status }}</td>
                    <td>{{ order.delivered_at }}</td>
                    <td>{{ order.supplier ? order.supplier.name : '' }}</td>
                    <td>{{ order.total_cost }}€</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      orders: 'orders/orders',
    }),
  },
};
</script>
