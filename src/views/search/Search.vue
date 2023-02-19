<template>
  <div class="wrapper">
    <div class="search">
      <span class="iconfont">&#xe752;</span>
      <input
        class="search__area"
        type="text"
        @change="handleSearchChange"
        :placeholder="history[Math.floor(Math.random() * history.length)]"
      />
      <div class="search__cancel" @click="cancelandback()">取消</div>
    </div>
    <div class="area" v-if="history.length">
      <h4 class="area__title">
        搜索历史
        <span class="area__clear" @click="clearHistory()">清除搜索历史</span>
      </h4>
      <ul class="area__list">
        <li
          class="area__list__item"
          v-for="item in history"
          :key="item"
          @click="() => goToSearchList(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="area">
      <h4 class="area__title">热门搜索</h4>
      <ul class="area__list">
        <li
          class="area__list__item"
          v-for="item in hotWordList"
          :key="item"
          @click="() => goToSearchList(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { get } from "../../utils/request";
export default {
  name: "Search",
  setup() {
    const rotuer = useRouter();
    const history = ref(JSON.parse(localStorage.history || "[]"));
    //添加历史记录
    const handleSearchChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue) return;
      const hasValue = history.value.find((item) => item === searchValue);
      if (!hasValue) {
        //没有历史记录就塞进去
        history.value.unshift(searchValue);
        localStorage.history = JSON.stringify(history.value);
      }
      router.push(`/searchList?keyword=${searchValue}`);
    };
    //清除历史记录
    const clearHistory = () => {
      localStorage.removeItem("history");
      history.value = [];
    };
    //热词
    const hotWordList = ref([]);
    const hotWord = async () => {
      const result = await get("/api/shop/search/hot-words");
      if (result.data.errno === 0) {
        hotWordList.value = result.data.data;
      }
    };
    hotWord();
    //点击词语跳转
    const goToSearchList = (keyword) => {
      const hasValue = history.value.find((item) => item === keyword);
      if (!hasValue) {
        //没有历史记录就塞进去
        history.value.unshift(keyword);
        localStorage.history = JSON.stringify(history.value);
      }
      router.push(`/searchList?keyword=${keyword}`);
    };
    //取消返回
    const cancelandback = () => {
      router.back();
    };
    return {
      handleSearchChange,
      history,
      clearHistory,
      cancelandback,
      hotWordList,
      hotWord,
      goToSearchList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.wrapper {
  margin: 0 0.18rem;
  .search {
    display: flex;
    position: relative;
    line-height: 0.32rem;
    margin-top: 0.16rem;
    color: $content-fontColor;
    .iconfont {
      position: absolute;
      left: 0.16rem;
      color: #b7b7b7;
    }
    &__area {
      flex: 1;
      padding: 0 0.12rem 0 0.44rem;
      border-radius: 0.16rem;
      background-color: $input-bgColor;
      border: none;
      outline: none;
      font-size: 0.14rem;
    }
    &__cancel {
      margin-left: 0.12rem;
      font-size: 0.16rem;
    }
  }
  .area {
    margin-top: 0.24rem;
    &__title {
      margin: 0;
      line-height: 0.22rem;
      font-size: 0.16rem;
      font-weight: normal;
      color: $content-fontColor;
    }
    &__clear {
      color: $content-fontColor;
      float: right;
      font-size: 0.14rem;
    }
    &__list {
      margin: 0 0 0 -0.1rem;
      padding: 0;
      list-style-type: none;
      &__item {
        margin-top: 0.12rem;
        margin-left: 0.1rem;
        padding: 0 0.1rem;
        line-height: 0.32rem;
        font-size: 0.14rem;
        background-color: $input-bgColor;
        display: inline-block;
        border-radius: 0.02rem;
      }
    }
  }
}
</style>
