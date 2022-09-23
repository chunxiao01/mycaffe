import {
  ADD_CART,
  ADD_CART_GOODS_COUNTS,
  CHECK_CART,
  CHECK_CART_ALL,
  CLEAR_CART
} from "./mutations-type"

export default {
  [ADD_CART](state, payload) {
    //新商品添加到购物车
    state.cartDatas.push(payload)
  },
  [ADD_CART_GOODS_COUNTS](state, payload) {
    //商品已经存在于购物车，则只改变商品数量
    if (state.cartDatas && state.cartDatas[payload.index]) {
      state.cartDatas[payload.index].goodspiece += payload.count
    }
    if (state.cartDatas[payload.index].goodspiece <= 0) {
      state.cartDatas.splice(payload.index, 1)
    }
  },
  [CHECK_CART](state, payload) {
    //是否选择商品
    if (state.cartDatas && state.cartDatas[payload.index]) {
      state.cartDatas[payload.index].goodschecked = !payload.checked
    }
  },
  [CHECK_CART_ALL](state, payload) {
    //全选
    state.cartDatas.forEach((item) => {
      item.goodschecked = !payload.checkall
    })
  },
  [CLEAR_CART](state) {
    //清空
    state.cartDatas = []
  }
}
