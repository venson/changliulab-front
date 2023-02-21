export default ($axios) => {
  // $axios.setBaseURL('http://localhost:8222')

    return {
      getIndexData: () => $axios.get('/eduservice/front/index'),
    }
  }