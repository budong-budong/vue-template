import axios from '@/libs/api.request'

export function getData (){
  return axios.request({
    url: 'https://api.thecatapi.com/v1/breeds',
    method: 'get',
    params: {
        limit:20,
      }
  })
}

// 接口报错 可能是后台的原因
// export function getCatFact (){
//     return axios.request({
//       url: 'https://cat-fact.herokuapp.com/facts/random',
//       method: 'get',
//       params:{
//         animal_type:'cat',
//         amount:1
//       }
//     })
//   }