
const url = 'eduservice/front/research'

export default($axios)=>{
    return{
        getResearch:()=>$axios.get(`${url}`)
    }
}