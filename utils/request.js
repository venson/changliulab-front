import axios from 'axios'
import cookie from 'js-cookie'

const service = axios.create({
    baseURL: "http://localhost:9001",
    timeout: 200000
})
service.interceptors.request.use(
    config =>{
        var token = cookie.get('changliuLab_token')
        if(token){
            config.headers['token'] = token;
        }
        return config
    }
)
export default service