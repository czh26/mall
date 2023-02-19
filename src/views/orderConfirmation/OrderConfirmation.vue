<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <Order />
  </div>
</template>

<script>
import TopArea from "./TopArea.vue";
import ProductList from "./ProductList";
import Order from "./Order";
export default {
  name: "OrderConfirmation",
  components: { TopArea, ProductList, Order },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}
</style>
