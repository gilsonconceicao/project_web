import axios from 'axios'; 
import { configDefault, baseApiUpi } from '../configApi'; 

export function getMovies () {
    const url = `${baseApiUpi}/trending/movie/day`;

    const config = {
        params: configDefault
    }
    
    return axios.get(url, config);
}