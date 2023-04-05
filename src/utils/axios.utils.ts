import axios from 'axios'
import envConfig from '@/config/env.config'

const axiosInstance = axios.create({
    baseURL: envConfig.baseApiUrl,
})


export default axiosInstance