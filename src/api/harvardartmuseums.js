import axios from '@/libs/api.request'

// 不可用 原因 需要携带apikey
export function getObject (){
  return axios.request({
    url: 'https://api.harvardartmuseums.org/object',
    method: 'get',
   
  })
}