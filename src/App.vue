<template>
  <div id="app">
    <shoppingcart v-if="!showAddrPage" @showAddressPage="showAddressPage()"></shoppingcart>
    <cart v-if="showAddrPage"></cart>
  </div>
</template>

<script>
  import shoppingcart from './components/shoppingcart.vue';
  import cart from './components/cart.vue';

export default {
  name: 'App',
  components: {
    shoppingcart,
    cart
  },
  data () {
    return {
      showAddrPage: false

    }
  },
  methods: {
    showAddressPage () {
      this.showAddrPage = true;
    }
  }
}
</script>

<style scoped>

</style>
