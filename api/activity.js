
import request from '@/utils/request'
const activityUrl = 'eduservice/front/activity'

export default{
    getPageList(page, limit){
        return request({
            url: `${activityUrl}/${page}/${limit}`,
            method: 'get'
        })
    },
    getActivity(id){
        return request({
            url: `${activityUrl}/${id}`,
            method: 'get'
        })
    }

}