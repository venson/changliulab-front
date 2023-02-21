import activityApi from '@/api/nuxt/activity'
import bannerApi from '@/api/nuxt/banner'
import courseApi from '@/api/nuxt/course'
import indexApi from '@/api/nuxt/index.js'
import memberApi from '@/api/nuxt/member'
import methodologyApi from '@/api/nuxt/methodology'
import researchApi from '@/api/nuxt/research'
import scholarApi from '@/api/nuxt/scholar'
import userApi from '@/api/nuxt/user'
export default function({ $axios, store ,app}, inject) {
  function axiosConfig($axios) {
  // 设置请求拦截
  $axios.onRequest((config) => {
    // 用于调试
      // console.log('$axios.onRequest', config)
      // console.log(process.env.API_URL)
      // console.log(process.env)
      // console.log(process.DEBUG)
    if (process.env.DEBUG) {
      console.log('$axios.onRequest', config)
    }
    // requestConfig = {
    //   baseURL: config.baseURL,
    //   url: config.url,
    //   method: config.method,
    //   data: config.data,
    //   headers: config.headers,
    //   params: config.params,
    //   query: config.query,
    // }
      // console.log('requestConfig',config)

    config.startTime = new Date().getTime()
    config.headers['Content-Type'] = 'application/json'
    return config
  })
  // 设置响应拦截
  $axios.onResponse((response) => {
    response.config.endTime = new Date().getTime()
    const status = response.status

    if (+status === 200) {
      // 打印出每个接口的响应时间，如果慢了就捶后端，让他优化！！！
      console.info(response.config.url,'请求时间',response.config.endTime - response.config.startTime + 'ms'
      )
      // 用于调试
      if (process.env.DEBUG) {
        // console.info('$axios.onResponse', response.data)
      }
      // 返回接口数据
      return response.data
    } else {
      // 如果请求失败的，打印出相应的错误信息，更好的修改。
      const responseConfig = response ? response.config : {}
      console.error('响应拦截报错提示： ', {
        url: responseConfig.baseURL + responseConfig.url,
        status: response.status,
        statusText: response.statusText,
        method: responseConfig.method,
        headers: responseConfig.headers,
        data: responseConfig.data,
        params: responseConfig.params,
        responseData: response.data,
      })
    }
  })

  // axios错误处理
  $axios.onError((error) => {
    const response = error.response || {}
    const responseConfig = response.config || {}
    console.error('$axios.onError: ', error)
    // console.error('错误处理提示 ', {
    //   url: responseConfig.baseURL + responseConfig.url,
    //   status: response.status,
    //   statusText: response.statusText,
    //   method: responseConfig.method,
    //   headers: responseConfig.headers,
    //   data: responseConfig.data,
    //   params: responseConfig.params,
    //   responseData: response.data,
    //   ...requestConfig,
    // })

  })
  // 最后返回$axios对象
  return $axios
}

inject('activityApi', activityApi(axiosConfig($axios.create())))
inject('bannerApi', bannerApi(axiosConfig($axios.create())))
inject('courseApi', courseApi(axiosConfig($axios.create())))
inject('indexApi', indexApi(axiosConfig($axios.create())))
inject('memberApi', memberApi(axiosConfig($axios.create())))
inject('methodologyApi', methodologyApi(axiosConfig($axios.create())))
inject('researchApi', researchApi(axiosConfig($axios.create())))
inject('scholarApi', scholarApi(axiosConfig($axios.create())))
inject('userApi', userApi(axiosConfig($axios.create())))
}

