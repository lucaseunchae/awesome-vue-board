import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000
})

export default axiosInstance
