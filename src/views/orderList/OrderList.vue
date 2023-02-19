<template>
  <div>
    <div class="wrapper">
      <div class="title">我的订单</div>
      <div class="orders">
        <div class="order" v-for="item in list" :key="item.shopId">
          <div class="order__title">
            {{ item.shopName }}
            <span class="order__status">{{
              item.isCanceled ? "已取消" : "已下单"
            }}</span>
          </div>
          <div class="order__content">
            <div class="order__content__imgs">
              <span
                v-for="(innerItem, innerIndex) in item.products"
                :key="innerIndex"
              >
                <img
                  class="order__content__img"
                  v-if="innerIndex <= 3"
                  :src="innerItem.product.img"
                  alt="订单列表"
                />
            </span>
            </div>
            <div class="order__content__info">
              <div class="order__content__info__price">&yen;{{ item.totalPrice }}</div>
              <div class="order__content__info__count">共{{ item.totalNumber }}件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Docker :currentIndex="2" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { get } from "../../utils/request";
import Docker from "../../components/Docker";
export default {
  name: "OrderList",
  components: { Docker },
  setup() {
    const data = reactive({ list: [] });
    const { list } = toRefs(data);
    const getNearbyList = async () => {
      const result = await get("/api/order");
      if (result.data?.errno === 0 && result.data?.data?.length) {
        const orderList = result.data.data
        orderList.forEach(order => {
          const products = order.products || []
          let totalPrice = 0
          let totalNumber = 0
          products.forEach(productItem => {
            totalPrice += (productItem?.product.price * productItem?.orderSales) || 0
            totalNumber += productItem?.orderSales || 0
          })
          order.totalPrice = totalPrice
          order.totalNumber = totalNumber
        });
        // console.log(orderList)
        data.list = result.data.data;
      }
    };
    getNearbyList();
    return { data, list };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
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
.order {
  padding: 0.16rem;
  background-color: $bgColor;
  &__title {
    font-size: 0.16rem;
  }
  &__status {
    float: right;
    font-size: 0.14rem;
    color: #999;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0.16rem 0.12rem 0 0;
    }
    &__info {
      margin-top: 0.16rem;
      height: 0.4rem;
      &__price {
        color: #e93b3b;
        font-size: 0.14rem;
        line-height: 0.2rem;
      }
      &__count {
        margin-top: 0.04rem;
        font-size: 0.12rem;
        color: $content-fontColor;
        line-height: 0.14rem;
        text-align: right;
      }
    }
  }
}
</style>
