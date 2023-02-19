<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBack()">&#xe662;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe752;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
          v-model="keyword"
          @change="handleSearchInputChange"
        />
      </div>
    </div>
    <router-link
      v-for="item in searchList"
      :to="`/shop/${item._id}`"
      :key="item._id"
    >
      <Shopinfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { get } from "../../utils/request";
import Shopinfo from "../../components/Shopinfo";
export default {
  name: "Search",
  components: { Shopinfo },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const keyword = ref(route.query.keyword || "");
    //获取搜索商店接口数据
    const searchList = ref([]);
    const getSearchList = async () => {
      const result = await get("/api/shop/search/list", {keyword});
      if (result.data.errno === 0) {
        searchList.value = result.data.data;
        console.log(keyword.value);
      }
    };
    getSearchList();
    //返回
    const handleBack = () => {
      router.push({ name: "Home" });
    };
    //
    const handleSearchInputChange = (e) => {
        getSearchList(keyword.value);
    };
    return {
      handleBack,
      keyword,
      handleSearchInputChange,
      searchList,
      getSearchList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.wrapper {
  margin: 0 0.18rem;
}
a {
  text-decoration: none;
}
.search {
  display: flex;
  margin: 0.2rem 0 0.12rem -0.18rem;
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
