<template>
    <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive } from 'vue';
export const useToastEffect = () => {
  const toastData = reactive({
    toastStatus: false,
    showMessage: "",
  });
  const showToast = (message) => {
    toastData.toastStatus = true;
    toastData.showMessage = message;
    setTimeout(() => {
      toastData.toastStatus = false;
      toastData.showMessage = "";
    }, 3000);
  };
  return { toastData, showToast, useToastEffect };
};

export default {
    props: ['message']
}
</script>

<style scoped lang="scss">
.toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.1rem;
    background-color: rgba(0, 0, 0, 0.35);
    font-size: 0.16rem;
    color: #fff;
}
</style>
