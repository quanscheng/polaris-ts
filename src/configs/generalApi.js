import axios from 'axios'

const { REACT_APP_API_ORIGIN } = process.env
console.log('url: ', REACT_APP_API_ORIGIN)

const api = axios.create({
  baseURL: REACT_APP_API_ORIGIN,
})

// request
const handleRequest = (config) => {
  config.headers = { 'X-Requested-With': 'XMLHttpRequest' }
  return config
}
// request error
const handleRequestErr = (error) => {
  return Promise.reject(error)
}

// response
const handleResponse = (response) => {
  return response.data
}
// response error
const handleResponseErr = (error) => {
  return Promise.reject(error)
}

// use
api.interceptors.request.use(handleRequest, handleRequestErr)
api.interceptors.response.use(handleResponse, handleResponseErr)

export { api }
