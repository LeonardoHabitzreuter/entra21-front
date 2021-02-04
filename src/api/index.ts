import axios from 'axios'

type LoginRequest = {
  email: string
  password: string
}

const USER_KEY = 'UserId'

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001',
  headers: { 'content-type': 'application/json' }
})

axiosInstance.interceptors.request.use(config => {
  config.headers.UserId = localStorage.getItem(USER_KEY)
  return config
})

export const login = (loginRequest: LoginRequest) => {
  return axiosInstance
    .post<string>('/auth/login', loginRequest)
    .then(resp => localStorage.setItem(USER_KEY, resp.data))
}

export const post = <T>(url: string, data: any) => (
  axiosInstance.post<T>(`/${url}`, data)
)

export const get = <T>(url: string, params?: object) => (
  axiosInstance.get<T>(`/${url}`, { params })
)
