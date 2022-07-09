
import request from '@/utils/request'
const methodologyUrl = 'eduservice/front/methodology'

export default{
    getMethodology(lang){
        return request({
            url: `${methodologyUrl}/${lang}`,
            method: 'get'
        })
    }

}