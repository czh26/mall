<template>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">
        <div class="products__item" v-for="item in productList" :key="item._id">
          <img class="products__item__img" :src="item.imgUrl" alt="" />
          <div class="products__item__detail">
            <div class="products__item__title">{{ item.name }}</div>
            <p class="products__item__price">
              <span class="products__item__yen"
                >&yen;{{ item.price }} × {{ item.count }}</span
              >
              <span class="products__item__total"
                >&yen;{{ (item.price * item.count).toFixed(2) }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useCartEffect } from "../shop/commonCartEffect";
export default {
  name: "ProductList",
  setup() {
    const route = useRoute();
    const store = useStore();
    const shopId = route.params.id;
    const cartList = store.state.cartList;
    const { productList, shopName } = useCartEffect(shopId);

    return {
      shopId,
      cartList,
      productList,
      shopName,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.products {
  margin: 0.16rem 0.18rem;
  background-color: $bgColor;
  &__title {
    padding: 0.16rem;
    font-size: 0.16rem;
  }
  &__wrapper {
    height: 3.43rem;
    background-color: #fafafa;
    overflow-y: scroll;
  }
  &__list {
    background-color: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    margin: 0 0.16rem 0.16rem 0.16rem;
    &__detail {
      flex: 1;
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin-bottom: 0.06rem;
      font-weight: bold;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0;
      height: 0.2rem;
    }
    &__yen {
      flex: 1;
      color: #e93b3b;
      font-size: 0.14rem;
    }
    &__total {
      font-size: 0.14rem;
    }
  }
}
</style>
