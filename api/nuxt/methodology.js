
const url = 'eduservice/front/methodology'

export default($axios)=>{
    return {
        getMethodology:(lang)=>$axios.get(`${url}/${lang}`)
    }

}