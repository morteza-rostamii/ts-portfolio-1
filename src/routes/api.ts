
import axios from 'axios'

const setting = {
  baseURL: ''
};

const Axios = axios.create({});

const Api = {
  
  // crypto
  async getCoins() {
    const url = 'https://api.coincap.io/v2/assets';
  
    return await Axios.get(url);
    //const response = await fetch(url);
    //const data = await response.json();
    //console.log(data)
    //return data;
  },
}

export default Api;

