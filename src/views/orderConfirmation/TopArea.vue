<template>
  <div class="top">
    <div class="top__bgcolor"></div>
    <div class="top__header">
      <div class="top__header__back iconfont" @click="handleBack()">
        &#xe601;
      </div>
      确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">新疆昌吉市商城路亚馨家园</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">陈子涵</span>
        <span class="top__receiver__info__name">17609941226</span>
      </div>
      <div class="top__receiver__icon iconfont">&#xe601;</div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "TopArea",
  setup() {
    const handleBack = () => {
      router.back();
    };
    return { handleBack };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.top {
  position: relative;
  height: 1.93rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: $bgColor;
    text-align: center;
    font-size: 0.16rem;
    &__back {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background-color: $bgColor;
    border-radius: 0.04rem;
    &__title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: $content-fontColor;
    }
    &__address {
      line-height: 0.2rem;
      padding: 0 0.4rem 0 0.16rem;
      color: $content-fontColor;
      font-size: 0.14rem;
    }
    &__info {
      padding: 0.06rem 0 0 0.16rem;
      &__name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
    &__icon {
      position: absolute;
      right: 0.16rem;
      top: 0.48rem;
      color: #666;
      font-size: 0.2rem;
      transform: rotate(180deg);
    }
  }
}
</style>
