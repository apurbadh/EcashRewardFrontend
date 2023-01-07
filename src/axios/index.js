import axios from "axios"

export default async function useAxios() {

  if (process.browser){
    const token = localStorage.getItem('bearer_token') ?? '';

  return axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      Authorization: `Bearer ${token} `
    }
  })
  }


}
