<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleCategories(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in contentList" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="" />
        <div class="product__item__detail">
          <div class="product__item__title">{{ item.name }}</div>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__num">
          <span
            class="product__num__minus"
            @touchstart="
              () => {
                changeItemToCart_touch(shopId, item._id, shopName, item, -1);
              }
            "
            @touchend="
              () => {
                changeItemToCart_handle(shopId, item._id, shopName, item, -1);
              }
            "
            >-</span
          >
          <span class="product__num__value">
            {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}
          </span>
          <span
            class="product__num__plus"
            @touchstart="
              () => {
                changeItemToCart_touch(shopId, item._id, shopName, item, 1);
              }
            "
            @touchend="
              () => {
                changeItemToCart_handle(shopId, item._id, shopName, item, 1);
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { get } from "../../utils/request";
import { useStore } from "vuex";
import { useCartEffect } from "./commonCartEffect";

export default {
  name: "Content",
  props: ["shopName"],
  setup() {
    const route = useRoute();
    const store = useStore();
    const { cartList } = toRefs(store.state);
    const shopId = route.params.id;
    const { changeItemToCart_touch, changeItemToCart_handle } = useCartEffect();
    const categories = [
      {
        name: "全部商品",
        tab: "all",
      },
      {
        name: "秒杀",
        tab: "seckill",
      },
      {
        name: "新鲜水果",
        tab: "fruit",
      },
    ];
    const data = reactive({
      currentTab: categories[0].tab, //all
      contentList: [],
    });
    const { currentTab, contentList } = toRefs(data);
    const getContentData = async (tab) => {
      const result = await get(`/api/shop/${shopId}/products`, {
        tab,
      });
      if (result?.data?.errno === 0) {
        data.contentList = result.data.data;
      }
    };
    getContentData("all");
    // let timeOutEvent = 0;
    // const gotouchstart = () => {
    //   clearTimeout(timeOutEvent); //清除定时器
    //   timeOutEvent = 0;
    //   timeOutEvent = setTimeout(function () {
    //     //执行长按要执行的内容，
    //     alert("长按了");
    //   }, 600); //这里设置定时
    // };
    const handleCategories = (tab) => {
      getContentData(tab);
      data.currentTab = tab;
    };
    return {
      shopId,
      currentTab,
      contentList,
      categories,
      handleCategories,
      cartList,
      changeItemToCart_touch,
      changeItemToCart_handle,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  width: 0.76rem;
  height: 100%;
  background-color: $input-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;
    &--active {
      background-color: #fff;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 1px solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      font-weight: bold;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontColor;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontColor;
    }
    &__price {
      margin: 0;
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
      position: absolute;
      right: 0.02rem;
      bottom: 0.12rem;
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
</style>
