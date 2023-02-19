<template>
  <div>
    <div class="order">
      <div class="order__price">
        实付金额
        <span class="order__price__num"
          ><b>&yen;{{ price }}</b></span
        >
      </div>
      <div class="order__btn" @click="() => submitOrder(true)">提交订单</div>
    </div>
    <div class="mask" v-show="mask" @click="() => submitOrder(false)">
      <div class="mask__content" @click.stop>
        <h3 class="mask__content__title">确认要离开收银台?</h3>
        <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
        <div class="mask__content__btns">
          <div class="mask__content__btn" @click="() => handleConfirma(true)">
            取消订单
          </div>
          <div
            class="mask__content__btn confirmation"
            @click="() => handleConfirma(false)"
          >
            确认支付
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute, loadRouteLocation } from "vue-router";
import { useStore } from "vuex";
import { post } from "../../utils/request";
import { useCartEffect } from "../shop/commonCartEffect";
import TopArea from "./TopArea.vue";
import ProductList from "./ProductList";
import ShopinfoVue from "../../components/Shopinfo.vue";
export default {
  name: "Order",
  components: { TopArea, ProductList },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const shopId = parseInt(route.params.id); //parseInt('1', index) = 1 index默认为10进制
    const { productList, price, shopName } = useCartEffect(shopId);
    const mask = ref(false);
    const handleConfirma = async (isCanceled) => {
      //post订单数据
      try {
        const arr = [];
        for (let i in productList.value) {
          const product = productList.value[i];
          arr.push({ id: parseInt(product._id), num: product.count });
        }
        const result = await post("/api/order/", {
          addressId: "昌吉",
          shopId,
          shopName: shopName.value,
          isCanceled: isCanceled,
          products: arr,
        });
        if (result.data.errno === 0) {
          if (isCanceled === true) {
            router.push({ name: "Home" });
          } else {
            router.push({ name: "OrderList" });
          }
          store.commit("clearCart", shopId);
          const cartCopy = JSON.parse(localStorage.cartList || "{}");
          delete cartCopy[shopId];
          localStorage.cartList = JSON.stringify(cartCopy)
        }
      } catch (error) {
        console.log("提示下单失败" + error);
      }
    };
    const submitOrder = (boolean) => {
      //蒙层
      mask.value = boolean;
    };
    return {
      price,
      mask,
      handleConfirma,
      submitOrder,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.order {
  display: flex;
  height: 0.49rem;
  font-size: 0.14rem;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: $bgColor;
  &__price {
    flex: 1;
    color: $content-fontColor;
    padding: 0.13rem 0.24rem;
    &__num {
      font-size: 0.16rem;
    }
  }
  &__btn {
    width: 1rem;
    height: 0.49rem;
    color: $bgColor;
    line-height: 0.49rem;
    text-align: center;
    background-color: #4fb0f9;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background-color: $bgColor;
    border-radius: 0.04rem;
    &__title {
      margin: 0.24rem 0 0 0;
      font-size: 0.18rem;
      line-height: 0.25rem;
      color: $content-fontColor;
      text-align: center;
    }
    &__desc {
      margin: 0.08rem 0 0.24rem 0;
      line-height: 0.2rem;
      text-align: center;
      color: #666;
    }
    &__btns {
      display: flex;
      justify-content: center;
    }
    &__btn {
      margin: 0 0.12rem;
      width: 0.8rem;
      line-height: 0.32rem;
      font-size: 0.14rem;
      border: 1px solid #0091ff;
      border-radius: 0.16rem;
      text-align: center;
      color: #0091ff;
    }
    .confirmation {
      color: $bgColor;
      background-color: #4fb0f9;
    }
  }
}
</style>
