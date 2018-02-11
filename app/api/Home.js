import axios from 'axios';

export async function getCurrencies(){
  const apiServer = (location.origin.includes('localhost') ? 'http://localhost:3000' : 'https://kryptonite-api.herokuapp.com')
  return axios.get(`${apiServer}/api/v1/currency/all`)
}
