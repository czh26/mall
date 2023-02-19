<template>
  <div>
    <div class="position">
      <span class="iconfont position__icon">&#xe64c;</span>
      北京理工大学国防科技园2号楼10层 测试。
      <span class="iconfont position__notice">&#xecaa;</span>
    </div>
    <router-link to="/search">
      <div class="search">
        <span class="iconfont">&#xe752;</span>
        <input
          class="search__text"
          type="text"
          placeholder="山姆会员商店优惠商品"
        />
      </div>
    </router-link>
    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt=""
      />
    </div>

    <div class="icons">
      <div class="icons__item" v-for="item in iconList" :key="item.imgName">
        <img
          class="icons__item__img"
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
          alt=""
        />
        <p class="icons__item__desc">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StaticPart",
  setup() {
    const iconList = [
      { imgName: "超市", title: "超市" },
      { imgName: "菜市场", title: "菜市场" },
      { imgName: "水果店", title: "水果店" },
      { imgName: "鲜花", title: "鲜花绿植" },
      { imgName: "医药健康", title: "医药健康" },
      { imgName: "家居", title: "家居时尚" },
      { imgName: "蛋糕", title: "烘焙蛋糕" },
      { imgName: "签到", title: "签到" },
      { imgName: "大牌免运", title: "大牌免运" },
      { imgName: "红包", title: "红包套餐" },
    ];
    return {
      iconList,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontColor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: $input-bgColor;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    font-size: 0.2rem;
    display: inline-block;
    padding-left: 0.2rem;
    padding-right: 0.05rem;
    position: relative;
    top: 0.02rem;
  }
  &__text {
    width: 80%;
    display: inline-block;
    background: none;
    border: none;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.016rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}
.gap {
  height: 0.1rem;
  background-color: $content-bgColor;
  margin: 0 -0.18rem;
}
</style>