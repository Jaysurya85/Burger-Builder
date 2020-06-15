import axios from 'axios';

const instance = axios.create({
    baseURL: "https://my-burger-builder-website.firebaseio.com/"
})

export default instance;