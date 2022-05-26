import request from "@/utils/request"

export default {
    sendCode(email){
        return request({
            url: "/edumsm/msm/sendEmail",
            method: "post",
            headers: {'Content-Type': 'application/json'},
            data: email
        })
    },
    register(member){
        return request({
            url: "/educenter/member/register",
            method: "post",
            data: member
        })
    },
    login(info){
        return request({
            url: "/educenter/member/login",
            method: "post",
            data: info
        })
    },
    getMemberInfo(){
        return request({
            url: "/educenter/member/member",
            method: "get"
        })
    }
}