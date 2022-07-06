import request from "@/utils/request"

export default {
    login(user){
    return request({
        url: "/admin/acl/login",
        method: "post",
        data: member
        })
    },
    getLoginInfo(){
        return request({
            url: "/educenter/member/member",
            method: 'get'
        })
    }
}