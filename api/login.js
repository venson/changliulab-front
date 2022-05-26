import request from "@/utils/request"

export default {
    login(member){
    return request({
        url: "/educenter/member/login",
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