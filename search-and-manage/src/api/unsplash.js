import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 190129094e51956dc35c2c2a514074a065318735add0822650a545b44396d4d2'
}
})