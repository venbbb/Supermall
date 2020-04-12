import axios from "axios"
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 5000
  })

  // instance.interceptors.response.use(res =>{
  //   console.log("success");
  //   return res.data
  // }, err =>{
  //   console.log("error");
  //   if (err && err.response)  {
  //     switch (err.response.status) {
  //       case 404:
  //         console.log("请求错误");
  //         break
  //       case 401:
  //         console.log("未授权的访问");
  //         break
  //     }
  //   }
  // })

  return instance(config)
}
