import request from "@/utils/request"

export default {
    sendCode(email){
        return request({
            url: "/edumsm/msm/sendEmail",
            method: "post",
            data: email
        })
    },
    register(member){
        return request({
            url: "/educenter/member/register",
            method: "post",
            data: member
        })
    }
}