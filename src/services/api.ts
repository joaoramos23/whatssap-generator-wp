import axios from 'axios';

const key = process.env.NEXT_PUBLIC_API_KEY;

const bitly = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer 18eb13b0e1d1ebda62459ef6c7034dd825c75d35`,
  },
});

export default bitly;
