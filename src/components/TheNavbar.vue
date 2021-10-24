<template>
    <div>
        <BNavbar toggleable="lg" type="dark" variant="dark">
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

            <div style="font-size:20px;">
                <span v-if="totalCost" style="color:white;padding-right:10px;">{{ totalCost }}€</span>
                <button @click="$router.push({ name: 'cart' })" class="btn btn-default">
                    <span style="color:white;">{{ productCount }}</span>
                    <i class="material-icons" style="color:white;">shopping_cart</i>
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
