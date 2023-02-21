const url='/auth/front/user'
const codeUrl='edumsm/front/msm'
export default($axios)=>{
    return {
        register:(user)=>$axios.post(`${url}/register`,user),
        resetPassword:(user)=>$axios.post(`${url}/resetPassword`,user),
        getCode:(email)=>$axios.post(`${codeUrl}/securityCode`,email)

    }
}