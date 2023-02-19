<template>
  <div>
    <div class="wrapper">
      <div class="title">我的全部购物车</div>
      <div class="orders">
        <div class="prompt" v-if="!list[1]">
          购物车中暂无商品，快去购买商品吧
        </div>
        <div
          class="order"
          v-for="(cart, key) in list"
          :key="key"
          @click="gotoOrder(key)"
        >
          <div class="order__title">
            {{ cart.shopName }}
          </div>
          <div class="cart">
            <div
              class="cart__item"
              v-for="(product, innerKey) in cart.productList"
              :key="innerKey"
            >
              <img class="cart__img" :src="product.imgUrl" alt="" />
              <div class="cart__content">
                <p class="cart__content__title">{{ product.name }}</p>
                <span class="cart__content__price">
                  <span class="cart__content__price__yen">&yen;</span
                  >{{ product.price }} × {{ product.count }}
                </span>
                <span class="cart__content__total">
                  <span class="cart__content__total__yen">&yen;</span
                  >{{ (product.price * product.count).toFixed(2) }}
                </span>
              </div>
            </div>
          </div>
          <div class="cart__total" v-if="list.length >= 2">
            共计{{ cart.total }}件<span class="cart__total__arrow iconfont"
              >&#xe65e;</span
            >
          </div>
        </div>
      </div>
    </div>
    <Docker :currentIndex="1" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Docker from "../../components/Docker";
export default {
  name: "CartList",
  components: { Docker },
  setup() {
    const router = useRouter();
    const list = JSON.parse(localStorage.cartList || "[]");
    for (let i in list) {
      const cart = list[i];
      const productList = cart.productList;
      let result = 0;
      for (let j in productList) {
        const product = productList[j];
        result += product.count;
      }
      cart.total = result;
    }
    const gotoOrder = (key) => {
      router.push({ path: `/orderConfirmation/${key}` });
    };
    return { list, gotoOrder };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background-color: #f8f8f8;
}
.title {
  line-height: 0.44rem;
  font-size: 0.16rem;
  color: $content-fontColor;
  background-color: $bgColor;
  text-align: center;
}
.orders {
  margin: 0.16rem 0.18rem;
}
.prompt {
  text-align: center;
  font-size: 0.14rem;
}
.order {
  padding: 0.16rem;
  background-color: $bgColor;
  &__title {
    font-size: 0.16rem;
  }
}
.cart {
  &__item {
    position: relative;
    display: flex;
  }
  &__img {
    width: 0.46rem;
    height: 0.46rem;
    margin-top: 0.16rem;
    margin-right: 0.16rem;
  }
  &__content {
    flex: 1;
    overflow: hidden;
    &__title {
      margin-bottom: 0.06rem;
      font-weight: bold;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__price {
      color: #e93b3b;
      font-size: 0.14rem;
      &__yen {
        margin: 0;
        color: #e93b3b;
        font-size: 0.1rem;
      }
    }
    &__total {
      float: right;
      font-size: 0.14rem;
      &__yen {
        color: $content-fontColor;
        font-size: 0.1rem;
      }
    }
  }
  &__total {
    color: #999;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.28rem;
    background-color: $input-bgColor;
    &__arrow {
      margin-left: 0.08rem;
    }
  }
}
</style>
