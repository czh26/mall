import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const carListString = JSON.stringify(cartList)
  localStorage.cartList = carListString
}
const getLocalCartList = () => {
  if (localStorage.cartList) {
    return JSON.parse(localStorage.cartList)
  } else { return {} }
}
export default createStore({
  state: {
    cartList: getLocalCartList()
    // cartList: {
    //   //第一层商铺id
    //   shopId: {
    //     shopName: '沃尔玛',
    //     productList: {
    //       productId: {
    //         _id: '1',
    //         name: '番茄1kg/份',
    //         imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //         sales: 121,
    //         price: 6.6,
    //         oldPrice: 9.6,
    //         count: 0
    //       }
    //     }
    //   }
    // }
  },
  getters: {
  },
  mutations: {
    changeItemToCart(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shop = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      let product = shop.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + num
      if (num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shop.productList[productId] = product
      state.cartList[shopId] = shop
      setLocalCartList(state)
    },
    handleCheck(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId]?.productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    shopNameToCart(state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    clearCart(state, payload) {
      const shopInfo = state.cartList[payload]
      shopInfo.productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
