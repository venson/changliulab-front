const url = 'eduservice/front/activity'

export default($axios)=>{
    return {
        getPageActivity:(page,limit)=> $axios.get(`${url}/${page}/${limit}`),
        getActivity:(id)=>$axios.get(`${url}/${id}`),
    }

}
