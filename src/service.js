import axios from 'axios';

const URL = 'https://r5n1w6kzoc.execute-api.us-east-1.amazonaws.com/dev/v1/getcurrentweather';

const connector = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json'
  }
});

export const apiSearch = async(cityName) => {
  return await connector.get(`?city=${cityName}`,).then((res)=>{
    return res.data;
  })
}