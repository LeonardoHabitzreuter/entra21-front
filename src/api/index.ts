import axios from 'axios'
import { getData, store } from '/storage'

type LoginRequest = {
  email: string
  password: string
}

const USER_TOKEN = 'token'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001',
  headers: { 'content-type': 'application/json' }
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getData().token}`
  return config
})

export const login = (loginRequest: LoginRequest) => {
  return axiosInstance
    .post<string>('/auth/login', loginRequest)
    .then(({ data }) => store({ token: data }))
}

export const post = <T>(url: string, data: any) => (
  axiosInstance.post<T>(`/${url}`, data)
)

export const get = <T>(url: string, params?: object) => (
  axiosInstance.get<T>(`/${url}`, { params })
)
