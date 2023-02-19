<template>
  <div>
    <div class="mask" v-if="showCart && total > 0" @click="handleShowCart()" />
    <div class="cart">
      <!-- v-if="showCart" -->
      <div class="product" v-if="showCart && total > 0">
        <div class="product__header">
          <span
            class="product__header__icon iconfont__check"
            v-html="allCheck ? '&#xe652;' : '&#xe6f7;'"
            @click="() => allCartCheck(shopId)"
          ></span>
          <div class="product__header__all">全选</div>
          <div class="product__header__clear" @click="cleanProduct(shopId)">
            清空购物车
          </div>
        </div>
        <div class="product__item" v-for="item in productList" :key="item._id">
          <div
            class="product__item__checked iconfont__check"
            v-html="item.check ? '&#xe652;' : '&#xe6f7;'"
            @click="() => handleCheck(shopId, item._id)"
          ></div>
          <img class="product__item__img" :src="item.imgUrl" alt="" />
          <div class="product__item__detail">
            <div class="product__item__title">{{ item.name }}</div>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__num">
            <span
              class="product__num__minus"
              @click="
                () => {
                  changeItemToCart(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            <span class="product__num__value">
              {{ item.count || 0 }}
            </span>
            <span
              class="product__num__plus"
              @click="
                () => {
                  changeItemToCart(shopId, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </div>

      <div class="check">
        <div class="check__icon">
          <img
            class="check__icon__img"
            src="http://www.dell-lee.com/imgs/vue3/basket.png"
            alt=""
            @click="handleShowCart()"
          />
          <div class="check__icon__tag">{{ total }}</div>
        </div>
        <div class="check__info">
          总计：<span class="check__info__price">&yen; {{ price }}</span>
        </div>
        <div class="check__btn" @click="checkout()">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useCartEffect } from "./commonCartEffect";
import router from "@/router";
export default {
  name: "Cart",
  setup() {
    const store = useStore();
    const route = useRoute();
    const shopId = route.params.id;
    const cartList = store.state.cartList;
    const showCart = ref(false);
    const { changeItemToCart, productList, price } = useCartEffect(shopId);
    const total = computed(() => {
      const productList = cartList[shopId]?.productList;
      let count = 0;
      if (productList) {
        for (let i in productList) {
          const product = productList[i];
          count += product.count;
        }
        if (count === 0) {
          showCart.value = false;
        }
      }
      return count;
    });
    const handleCheck = (shopId, productId) => {
      store.commit("handleCheck", { shopId, productId });
    };
    const handleShowCart = () => {
      if (total.value > 0) {
        showCart.value = !showCart.value;
      }
    };
    const allCheck = computed(() => {
      const productList = cartList[shopId]?.productList;
      let result = true;
      if (productList) {
        for (let i in productList) {
          const product = productList[i];
          if (product.count > 0 && !product.check) {
            result = false;
          }
        }
      }
      return result;
    });
    const cleanProduct = (shopId) => {
      showCart.value = !showCart.value;
      cartList[shopId] = {
        shopName: "",
        productList: {},
      };
    };
    const allCartCheck = (shopId) => {
      const productList = cartList[shopId]?.productList;
      if (productList) {
        for (let i in productList) {
          productList[i].check = true;
        }
      }
    };
    const checkout = () => {
      if (total.value > 0) {
        router.push({ path: `/orderConfirmation/${shopId}` });
      }
    };
    return {
      productList,
      shopId,
      cartList,
      total,
      price,
      changeItemToCart,
      handleCheck,
      cleanProduct,
      allCheck,
      allCartCheck,
      showCart,
      handleShowCart,
      checkout,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
a {
  text-decoration: none;
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $bgColor;
  box-shadow: 0 -1px 1px 0 $content-bgColor;
}
.product {
  flex: 1;
  overflow-y: scroll;
  background-color: $bgColor;
  &__header {
    display: flex;
    height: 0.52rem;
    border-bottom: 1px solid $content-bgColor;
    &__icon {
      width: 0.46rem;
      height: 0.46rem;
      line-height: 0.52rem;
      color: #0091ff;
      text-align: center;
    }
    &__all {
      flex: 1;
      margin: 0.18rem 0.18rem 0.18rem 0;
      font-size: 14px;
      color: $content-fontColor;
    }
    &__clear {
      margin: 0.18rem;
      font-size: 0.14rem;
      text-align: center;
      color: $content-fontColor;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.08rem 0;
    margin-right: 0.16rem;
    border-bottom: 1px solid $content-bgColor;
    &__checked {
      width: 0.46rem;
      height: 0.46rem;
      line-height: 0.46rem;
      color: #0091ff;
      text-align: center;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      font-weight: bold;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &__yen {
      font-size: 0.1rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.1rem;
      color: #999;
      text-decoration: line-through;
    }
    .product__num {
      line-height: 0.5rem;
      position: absolute;
      right: 0.02rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.19rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        color: #666;
        border: 1px solid #666;
      }
      &__value {
        display: inline-block;
        width: 0.3rem;
        text-align: center;
      }
      &__plus {
        color: #fff;
        background-color: #0091ff;
      }
    }
  }
}
.check {
  display: flex;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.76rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      top: 0.02rem;
      right: 0.12rem;
      min-width: 0.25rem;
      height: 0.2rem;
      color: $bgColor;
      line-height: 0.2rem;
      transform: scale(0.5);
      transform-origin: center;
      background-color: #e93b3b;
      border-radius: 0.1rem;
      text-align: center;
    }
  }
  &__info {
    flex: 1;
    padding-left: 0.08rem;
    font-size: 0.12rem;
    color: $content-fontColor;
    &__price {
      color: #e93b3b;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    font-size: 0.14rem;
    color: $bgColor;
  }
}
</style>
