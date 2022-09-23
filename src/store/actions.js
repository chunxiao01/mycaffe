import {
  ADD_CART,
  ADD_CART_GOODS_COUNTS,
  CHECK_CART,
  ADD_CART_ACTION,
  CHECK_CART_ACTION
} from "./mutations-type"

export default {
  [ADD_CART_ACTION](context, payload) {
    const goods_index = context.state.cartDatas.findIndex(
      (item) => item.goods_final_id === payload.cartData.goods_final_id
    )
    if (goods_index > -1) {
      //已经存在于购物车，则只改变商品数量
      const action_payload = {
        index: goods_index,
        count: payload.cartcount
      }
      context.commit(ADD_CART_GOODS_COUNTS, action_payload)
    } else {
      //商品已经存在于购物车，则只改变商品数量
      context.commit(ADD_CART, payload.cartData)
    }
  },
  [CHECK_CART_ACTION](context, payload) {
    const goods_index = context.state.cartDatas.findIndex(
      (item) => item.goods_final_id === payload.goods_final_id
    )
    if (goods_index > -1) {
      const action_payload = {
        index: goods_index,
        checked: payload.goodschecked
      }
      context.commit(CHECK_CART, action_payload)
    }
  }
}
