<template>
  <div class="docker">
    <span
      v-for="(item, index) in dockerList"
      :class="{ docker__item: true, 'docker__item--active': index === currentIndex }"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props: ['currentIndex'],
  setup() {
    const dockerList = [
      { icon: "&#xe6bb;", text: "首页", to: {name : 'Home'} },
      { icon: "&#xe658;", text: "购物", to: {name : 'CartList'} },
      { icon: "&#xe8ae;", text: "订单", to: {name : 'OrderList'} },
      { icon: "&#xe600;", text: "我的", to: {name : 'Home'} },
    ];
    return {
      dockerList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../style/viriables.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontColor;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
  color: $content-fontColor;
}
</style>
