<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :to="`/shop/${item._id}`"
      :key="item._id"
    >
      <Shopinfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import Shopinfo from "../../components/Shopinfo";
export default {
  name: "Nearby",
  components: { Shopinfo },
  setup() {
    const nearbyList = ref([]);
    const getNearbyList = async () => {
      try {
        const result = await get("/api/shop/hot-list");
        if (result?.data?.errno === 0) {
          nearbyList.value = result.data.data;
        } else {
          alert("获取数据失败");
        }
      } catch (error) {
        alert("请求失败 " + error);
      }
    };
    getNearbyList();
    return {
      nearbyList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontColor;
  }
  a {
    text-decoration: none;
  }
}
</style>
