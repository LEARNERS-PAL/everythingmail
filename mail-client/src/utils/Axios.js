import axios from "axios"

const Axios = axios.create({
    baseURL: 'https://everythingmail.onrender.com/api/send',
    withCredentials: true,
})

export default Axios