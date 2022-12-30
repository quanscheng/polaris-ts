import { api } from '@/configs/interceptor'

export const getFetcher = ([url, params]) =>
  api.get(url, params).then((res) => res)
