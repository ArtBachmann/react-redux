import axios from 'axios'

const KEY = 'AIzaSyB3f264Jj3RspOB2zeJBhZQWoc00o-wGRM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})