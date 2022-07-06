import request from '@/utils/request'

const scholarUrl='eduservice/scholar'
export default {
    // method for scholar
    getPageScholar(page, limit, filter){
        return request({
            url: `${scholarUrl}/${page}/${limit}`,
            method: 'post',
            data: filter
        })
    },
    getAllByScholarId(scholarId){
        return request({
            url: `${scholarUrl}/${scholarId}`,
            method: 'get',
        })
    },
    getCitationByMemberId(memberId){
        return request({
            url: `${scholarUrl}/citation/${memberId}`,
            method: 'get',
        })
    },
    getPageScholarByMemberId(memberId,page,limit){
        return request({
            url: `${scholarUrl}/${memberId}/${page}/${limit}`,
            method: 'get',
        })
    },

}