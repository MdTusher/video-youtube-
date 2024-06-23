import axios from 'axios';

const KEY='AIzaSyBh8nBHJa4qMzko5Z2BTiPpON-febdYI_c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})