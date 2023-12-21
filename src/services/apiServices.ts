import AxiosInstance from './axios'

export const get = async (url: string, config?: any) => {
  try {
    const res = await AxiosInstance.get(url, config)
    if (res?.data?.data) return {result: res?.data?.data, error: null}
    return {result: null, error: res?.data}
  } catch (error) {
    return {result: null, error}
  }
}

export const post = async (url: string, data: any, config?: any) => {
  try {
    const res = await AxiosInstance.post(url, data, config)
    return {result: res?.data?.data || res?.data, error: null}
  } catch (error) {
    return {result: null, error}
  }
}
