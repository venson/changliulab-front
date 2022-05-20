import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:9001",
    timeout: 200000
})

export default service