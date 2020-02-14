import axios from 'axios';

const api = axios.create( {
    baseURL: 'http://lna.linea.gov.br/api'
});

export const getCatalog = (page) => 
    api.get('/catalog?page='+ page);
