import axios from "axios"

function request(config) {
  //1.创建axios实例，定义基本参数
  const instance = axios.create({
    baseURL: "http://1.2.1.1",
    timeout: 5000
  })

  //2.定义拦截器
  instance.interceptors.request.use(
    (config) => {
      //请求拦截器
      return config
    },
    (err) => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    (res) => {
      //响应拦截器
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )

  return instance(config)
}

export { request }
