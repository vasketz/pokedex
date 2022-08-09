import { API_HOST } from "../utils/constants";


export async function getPokemonsApi(endPointUrl) {
    console.log(endPointUrl);
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endPointUrl || url);
        const result = await response.json();
        return result;
    }
    catch (error){
        throw error;
    }
}

export async function getPokemonsDetailsByUrlApi(url){
    try {
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (error) {
        throw error;
    }
}