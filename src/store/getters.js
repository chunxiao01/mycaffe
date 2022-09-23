import { GET_CART_TOTAL_COUNT, GET_CART_TOTAL_PRICE } from "./mutations-type"

export default {
  [GET_CART_TOTAL_COUNT](state) {
    const total_count = state.cartDatas
      .filter((item) => {
        return item.goodschecked
      })
      .reduce((p, item) => {
        return p + item.goodspiece
      }, 0)
    return total_count
  },
  [GET_CART_TOTAL_PRICE](state) {
    const total_price = state.cartDatas
      .filter((item) => {
        return item.goodschecked
      })
      .reduce((p, item) => {
        return p + item.goodspiece * item.goodsprice_final
      }, 0)
    return total_price
  }
}
