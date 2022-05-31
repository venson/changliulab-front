import request from "@/utils/request"

export default{
    getPageCourseList(page, limit, filter){
        return request({
            url: `/eduservice/coursefront/course/${page}/${limit}`,
            method: "post",
            data: filter
        })
    },
    getAllSubject(){
        return request({
            url: `/eduservice/edu-subject/getAllSubject`,
            method: "get"
        })
    },

    getCourseInfo(id){
        return request({
            url: `/eduservice/coursefront/course/${id}`,
            method: "get"
        })
    }
}