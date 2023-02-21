export default($axios)=>{
    return {
        getBannerList:()=> $axios.get('/educms/front/banner')
}
}
