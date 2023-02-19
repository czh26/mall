<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack()">&#xe662;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe752;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo
      :item="data.item"
      :hideborder="true"
      v-show="data.item.imgUrl"
      style="padding: 0 0.18rem"
    />
    <Content  :shopName="data.item.name"/>
    <Cart />
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import ShopInfo from "../../components/Shopinfo";
import Content from "./Content";
import Cart from "./Cart";
export default {
  name: "Shop",
  components: { ShopInfo, Content, Cart },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const data = reactive({ item: {} });
    const getItemData = async () => {
      const result = await get(`/api/shop/${route.params.id}`);
      if (result.status === 200) {
        data.item = result.data.data;
      } else {
        alert("请求失败");
      }
    };
    getItemData();
    const handleBack = () => {
      router.back();
    };
    return { data, handleBack };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.wrapper {
}
.search {
  display: flex;
  margin: 0.2rem 0.18rem 0.12rem 0;
  height: 0.32rem;
  line-height: 0.32rem;
  &__back {
    width: 0.47rem;
    font-size: 0.47rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    line-height: 0.32rem;
    background-color: $input-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      line-height: 0.34rem;
      font-size: 0.16rem;
      text-align: center;
      color: #b7b7b7;
    }
    &__input {
      padding-right: 0.2rem;
      display: block;
      background: none;
      border: none;
      outline: none;
      width: 100%;
      line-height: 0.32rem;
      font-size: 0.14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
