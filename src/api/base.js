import axios from 'axios'
import { baseURL } from './constants'

const apiBase = axios.create({
    baseURL: `${baseURL}`,
    headers: {
        'Content-type': 'application/json'
    }
})

// apiBase.interceptors.request.use(function (config) {
//     const username = localStorage.getItem('username')
//     const password = localStorage.getItem('password')

//     if (username && password) {
//         config.auth = {
//             username,
//             password
//         }
//     }

//     return config
// })

export default apiBase
