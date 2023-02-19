import { useStore } from "vuex";
import { computed } from 'vue'
export const useCartEffect = (shopId) => {
    const store = useStore()
    const cartList = store.state.cartList;
    let timeOutEvent = 0;
    const changeItemToCart = (shopId, productId, productInfo, num) => {
        store.commit("changeItemToCart", { shopId, productId, productInfo, num })
    };
    const changeItemToCart_touch = (shopId, productId, shopName, productInfo, num) => {
        clearTimeout(timeOutEvent); //清除定时器
        timeOutEvent = 0
        timeOutEvent = setInterval(() => {  //setInterval重复按时执行
            //执行长按要执行的内容
            store.commit("changeItemToCart", { shopId, productId, productInfo, num })
            store.commit("shopNameToCart", { shopId, shopName })
        }, 300); //这里设置定时
        // console.log(store.state.cartList)
    };
    const changeItemToCart_handle = (shopId, productId, shopName, productInfo, num) => {
        clearTimeout(timeOutEvent); //清除定时器
        if (timeOutEvent != 0) {
            store.commit("changeItemToCart", { shopId, productId, productInfo, num })
            store.commit("shopNameToCart", { shopId, shopName })
        }
    };
    const productList = computed(() => {
        const productList = cartList[shopId]?.productList || {};
        const notEmptyProductList = {}
        for (let i in productList) {
            if (productList[i].count > 0) {
                notEmptyProductList[i] = productList[i]
            }
        }
        return notEmptyProductList;
    });
    const price = computed(() => {
        const productList = cartList[shopId]?.productList;
        let count = 0;
        if (productList) {
            for (let i in productList) {
                const product = productList[i];
                if (product.check) {
                    count += product.count * product.price;
                }
            }
        }
        return count.toFixed(2);
    });
    const shopName = computed(() => {
        return cartList[shopId]?.shopName || "";
    });
    return {
        changeItemToCart,
        changeItemToCart_touch,
        changeItemToCart_handle,
        productList,
        price,
        shopName
    }
}