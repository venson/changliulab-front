const url='/eduservice/front/scholar'
export default($axios)=> {
    return {
        getPageScholar:(page,limit,filter)=>$axios.post(`${url}/${page}/${limit}`,filter),
        getScholarById:(id)=>$axios.get(`${url}/${id}`),
        getCitationByMemberId:(id)=>$axios.get(`${url}/citation/${id}`),
        getPageScholarByMemberId:(id,page,limit)=>$axios.get(`${url}/${id}/${page}/${limit}`),

    }


}
