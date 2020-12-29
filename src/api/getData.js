// 获取数据接口
import axios from '@/libs/api.request'

export function getUserList (query) {
    return axios.request({
        url: '/v1/users/list',
        method: 'get',
        data: query
    })
}

export function getUserCount (query) {
    return axios.request({
        url: '/v1/users/count',
        method: 'get',
        data: query
    })
}

// 订单列表
export function getOrderList (query) {
    return axios.request({
        url: '/bos/v2/users/:user_id/orders',
        method: 'get',
        data: query
    })
}

// 获取定位城市
export function cityGuess (query) {
    return axios.request({
        url: '/v1/cities'+'?type=guess',
        method: 'get',
        data: query
    })
}
// 获取餐馆列表
export function getResturants (query) {
    return axios.request({
        url: '/shopping/restaurants',
        method: 'get',
        data: query
    })
}
// 获取餐馆数量
export function getResturantsCount (query) {
    return axios.request({
        url: '/shopping/restaurants/count',
        method: 'get',
        data: query
    })
}
// 种类列表
export function foodCategory (query) {
    return axios.request({
        url: '/shopping/v2/restaurant/category',
        method: 'get',
        data: query
    })
}

// 更新餐馆信息
export function updateResturant (query) {
    return axios.request({
        url: '/shopping/updateshop',
        method: 'get',
        data: query
    })
}

// 删除餐馆信息
export function deleteResturant (query) {
    return axios.request({
        url: '/shopping/restaurant/' + restaurant_id,
        method: 'DELETE',
        data: query
    })
}

// 获取搜索地址
export function searchplace (cityid, value) {
    return axios.request({
        url: '/v1/pois',
        type: 'search',
        city_id: cityid,
        keyword: value

    })
}

// /shopping/v2/foods  食品列表
export function getFoodList (query) {
    return axios.request({
        url: '/shopping/v2/foods',
        method:'get',
        data:query
    })
}




// 登录
export const login = data => fetch('/admin/login', data, 'POST');

// 退出
export const signout = () => fetch('/admin/signout');

// 获取用户信息
export const getAdminInfo = () => fetch('/admin/info')

// 获取用户列表
// export const getUserList = data => fetch('/v1/users/list',data)



// 获取用户数量
// export const getUserCount = data =>fetch('/v1/users/count',data)
