import axios from 'axios'

const key = 'X-RapidAPI-Key'
const keyValue = 'e7c0b408d35c89057e6a644fe2b5f3ff'

const api = axios.create({
    baseURL: ' https://v2.api-football.com/players/search/',
    headers: {
        [key]: keyValue
    }
})

export default api