import axios from 'axios';


export const getData = async () => {
  return await axios({
    method: 'get',
    url: 'https://frontend-interview-api-sepia.vercel.app/api/items',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

