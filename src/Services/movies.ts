import axios from 'axios'; 
import { baseUrlMovie } from '../configApi'; 

export function getMovies () {
    const url = baseUrlMovie("day", "trending"); 
    return axios.get(url);
}