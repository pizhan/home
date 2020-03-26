import axios from 'axios'

export async function httpGet(url,data) {
    return await axios({url,data,method:"get"})
}