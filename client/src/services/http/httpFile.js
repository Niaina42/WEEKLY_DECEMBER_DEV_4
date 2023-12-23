import axios from 'axios';

const BaseUrl = 'http://localhost:9091'
const httpsFiles= axios.create({
    baseURL: BaseUrl + '/api',
});

export default httpsFiles
