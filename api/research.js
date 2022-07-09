import request from '@/utils/request'
const researchUrl = 'eduservice/front/research'

export default{
    getResearch(lang){
        return request({
            url: `${researchUrl}/${lang}`,
            method: 'get'
        })
    }

}