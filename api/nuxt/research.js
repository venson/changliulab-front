
const url = 'eduservice/front/research'

export default($axios)=>{
    return{
        getResearch:(lang)=>$axios.get(`${url}/${lang}`)
    }
}