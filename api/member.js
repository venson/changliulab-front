import request from "@/utils/request"

export default {

    getMemberList(page, limit){
        return request({
        url: `/eduservice/memberfront/getMemberFrontList/${page}/${limit}`,
        method: "get",
        })
    },
    getMemberInfo(id){
        return request({
        url: `/eduservice/memberfront/member/${id}`,
        method: "get",
        })
    },
}