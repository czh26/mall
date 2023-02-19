<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="请输入密码"
        v-model="data.password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper__login-btn" @click="handleLogin()">登陆</div>
    <div class="wrapper__register-btn" @click="handleRegisterClick()">
      立即注册
    </div>
    <Toast v-if="toastData.toastStatus" :message="toastData.showMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
// import axios from "axios";
import { post } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";
export default {
  name: "Login",
  components: { Toast },
  setup() {
    const router = useRouter();
    const data = reactive({
      username: "",
      password: "",
    });
    const { toastData, showToast } = useToastEffect();
    const handleLogin = async () => {
      try {
        const result = await post("/api/user/login", {
          username: data.username,
          password: data.password,
        });
        if (
          result?.data.username === data.username &&
          result?.data.password === data.password
        ) {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
        } else {
          showToast("用户名或密码不正确");
        }
        console.log(result);
      } catch (error) {
        alert("请求失败 " + error);
      }
    };
    //   axios
    //   .post(
    //     "https://www.fastmock.site/mock/da93472fba0eef3a73891c0459778e5a/mall/api/user/login",
    //     {
    //       username: data.username,
    //       password: data.password,
    //     }
    //   )
    //   .then((res) => {
    //     if (res.data.username === data.username & res.data.password === data.password) {
    //       localStorage.isLogin = true;
    //       router.push({ name: "Home" });
    //     }
    //     // console.log(res.data);
    //   })
    //   .catch(() => {
    //     console.log(err);
    //   });
    // localStorage.isLogin = true;
    // router.push({ name: 'Home' });

    const handleRegisterClick = () => {
      router.push({ name: "Register" });
    };
    return {
      handleLogin,
      handleRegisterClick,
      data,
      useToastEffect,
      toastData,
      showToast,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background-color: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }
  &__login-btn {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-btn {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontColor;
  }
}
</style>
