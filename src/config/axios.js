import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://reqres.in/api/users?page=2'
})

export default axios