<template>
    <div class="container mt-5">
        <h2>Invoices</h2>
        <InvoicesList/>
    </div>
</template>
<script>
import InvoicesList from '@/components/invoices/InvoicesList.vue';

export default {
  name: 'invoices',
  components: { InvoicesList },
};
</script>
