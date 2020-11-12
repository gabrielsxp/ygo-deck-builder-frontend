import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://ygo.kofastools.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.response.use((response) => {
  if (response.data.data) {
    return response.data.data
  }
  return response.data
})

export default axiosInstance
