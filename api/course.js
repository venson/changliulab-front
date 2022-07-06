import request from "@/utils/request"

export default {
    getPageCourseList(page, limit, filter) {
        return request({
            url: `/eduservice/coursefront/course/${page}/${limit}`,
            method: "post",
            data: filter
        })
    },
    getAllSubject() {
        return request({
            url: `/eduservice/edu-subject/getAllSubject`,
            method: "get"
        })
    },

    getCourseInfo(id) {
        return request({
            url: `/eduservice/coursefront/course/${id}`,
            method: "get"
        })
    },
    getChapterSection(id) {
        return request({
            url: `/eduservice/edu-chapter/getChapterSection/${id}`,
            method: "get",
        })
    },
    getChapterContent(id) {
        return request({
            url: `/eduservice/edu-content/chapter/${id}`,
            method: 'get'
        })
    },
    getSectionContent(id) {
        return request({
            url: `/eduservice/edu-content/section/${id}`,
            method: 'get'
        })
    },
    getChapter(id) {
        return request({
            url: `/eduservice/edu-chapter/getChapter/${id}`,
            method: "get",
        })
    },
    getChapterContent(id) {
        return request({
            url: `/eduservice/edu-content/chapter/${id}`,
            method: 'get'
        })
    },
    getSectionContent(id) {
        return request({
            url: `/eduservice/edu-content/section/${id}`,
            method: 'get'
        })
    },
    getSection(id) {
        return request({
            url: `/eduservice/edu-section/${id}`,
            method: "get",
        });
    },
}