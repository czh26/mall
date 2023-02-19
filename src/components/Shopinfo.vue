<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" alt="" />
    <div
      :class="{
        shop__content: true,
        'shop__content--bordered': hideborder ? false : true,
      }"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售{{ item.sales }}+</span>
        <span class="shop__content__tag">起送¥{{ item.expressLimit }}</span>
        <span class="shop__content__tag">基础运费¥{{ item.expressPrice }}</span>
      </div>
      <p class="shop__content__hightlight">{{ item.slogan }}</p>
      <div class="shop__products" v-if="item.products">
        <div
          class="shop__product"
          v-for="product in item.products"
          :key="product.name"
        >
          <img class="shop__product__img" :src="product.imgUrl" alt="" />
          <p class="shop__product__title">{{ product.name }}</p>
          <p class="shop__product__price">
            <span class="price__yen">&yen;</span><span class="price__num">{{ product.price }}</span>
            <span class="oldPrice__yen">&yen;{{ product.oldPrice }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopinfo",
  props: ["item", "hideborder"],
};
</script>

<style scoped lang="scss">
@import "../style/viriables.scss";
@import "../style/mixins.scss";
p {
  margin: 0;
  padding: 0;
  border: 0;
}
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontColor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontColor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__hightlight {
      padding-bottom: 0.12rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
      color: #e93b3b;
    }
  }
  &__products {
    width: 2.6rem;
    display: flex;
    overflow: hidden;
  }
  &__product {
    margin-right: 0.16rem;
    height: 1.31rem;
    &__img {
      width: 0.76rem;
      height: 0.76rem;
    }
    &__title {
      color: $content-fontColor;
      font-size: 0.12rem;
      line-height: 0.17rem;
    }
    &__price {
      width: 0.76rem;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #999;
      @include ellipsis;
    }
    .price__yen {
      color: #E93B3B;
      font-size: 0.1rem;
      text-decoration: line-through;
    }
    .price__num {
      color: #E93B3B;
      margin-right: 0.04rem;
    }
    .oldPrice__yen {
      font-size: 0.1rem;
      text-decoration: line-through;
    }
  }
}
</style>
