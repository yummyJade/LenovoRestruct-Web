import {get} from './axios.js'

// let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址
let base_url = "https://itstudio.club/webshop"




export const getHomeInfoByType = ({type: _type, num: _num}) =>{
    return get(
        `${base_url}/items/?`,
        {
            type: _type,
            number: _num
        });
}

//获取首页所有商品信息
export const getHomeInfoAll = ({type: _type, num: _num} = {type: "all", num: 6}) =>{
    return get(
        `${base_url}/items/?`,
        {
            type: _type,
            number: _num
        });
}


// 获取搜索得到列表

export const getSearchList = ({word: _word}) => {
    return get(
        `${base_url}/items/search/?`,
        {
            word: _word
        }
    )
}

//获取商品详情

export const getDetailInfo = ({id: _id}) => {
    return get(
        `${base_url}/items/${_id}`
    )
}





