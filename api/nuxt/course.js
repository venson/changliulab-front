const url='/eduservice/front/course'

export default($axios)=>{
    return {
        getAllSubject:()=> $axios.get(`${url}/subject`),
        getPageCourseByMemberId:(id,page,limit)=>$axios.get(`${url}/${id}/${page}/${limit}`),
        getSectionById:(id) => $axios.get(`${url}/section/${id}`),
        getChapterById:(id) => $axios.get(`${url}/chapter/${id}`),
        getCourseByCourseId:(id) => $axios.get(`${url}/${id}`),
        getCourseTreeById:(id) =>$axios.get(`${url}/tree/${id}`),
        getPageCourse:(page,limit,filter) => $axios.post(`${url}/${page}/${limit}`,filter),
    }
}