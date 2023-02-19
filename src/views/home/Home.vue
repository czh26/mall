<template>
  <div>
    <div class="wrapper">
      <StaticPart />
      <Nearby />
      <button style="margin: 0.1rem auto; display: block" @click="exit()">
        退出
      </button>
    </div>
    <Docker :currentIndex="0"/>
  </div>
</template>

<script>
import StaticPart from "./StaticPart";
import Nearby from "./Nearby";
import Docker from "../../components/Docker";
import { useRouter } from "vue-router";
export default {
  name: "Home",
  components: { StaticPart, Nearby, Docker },
  setup() {
    const router = useRouter();
    const exit = () => {
      localStorage.removeItem("isLogin");
      router.push({ name: "Login" });
    };
    return { exit };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>
