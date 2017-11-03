import axios from 'axios';

axios.interceptors.response.use(null, err => {
  console.error(err);
  return err;
});
