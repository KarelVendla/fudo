<template>
    <div>
        <BNavbar toggleable="lg" fixed="top">
            <BNavbarBrand @click="$router.push({ name: 'products' })">
                <img src="logo.png" class="navbar-logo"/>
            </BNavbarBrand>
            <BNavbarToggle target="nav-collapse"></BNavbarToggle>

            <BCollapse id="nav-collapse" is-nav>
                <BNavbarNav>
                   <BNavItem @click="$router.push({ name: 'products' })">Market</BNavItem>
                    <BNavItem @click="$router.push({ name: 'my-orders' })">My Orders</BNavItem>
                    <BNavItem @click="$router.push({ name: 'invoices' })">Invoices</BNavItem>
                </BNavbarNav>
            </BCollapse>

            <div class="cart-info">
                <span v-if="totalCost" style="padding-right:10px;">{{ totalCost }}€</span>
                <button @click="$router.push({ name: 'cart' })" class="btn btn-default">
                    <span>{{ productCount }}</span>
                    <i class="material-icons">shopping_cart</i>
                </button>
            </div>
        </BNavbar>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue';

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
  },
  computed: {
    ...mapState({
      totalCost: (state) => state.cart.total,
      productCount: (state) => state.cart.productCount,
    }),
  },
};
</script>
