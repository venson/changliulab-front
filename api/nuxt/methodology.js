
const url = 'eduservice/front/methodology'

export default($axios)=>{
    return {
        getPageMethodology:(current, size)=>$axios.get(`${url}/${current}/${size}`),
        getMethodologyById:(id)=>$axios.get(`${url}/${id}`)
    }

}