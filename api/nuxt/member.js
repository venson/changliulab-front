const url='/eduservice/front/member'
export default($axios)=> {

    return {
        getPIMembers:()=>$axios.get(`${url}`),
        getPageMembersByLevel:(page,limit,level)=>$axios.get(`${url}/${page}/${limit}`,{params: {level: level}}),
        getMemberById:(id)=>$axios.get(`${url}/${id}`)

    }
}
