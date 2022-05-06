import axios from "axios";
//root Url
export const url = 'https://api.spotify.com/v1/';

export const Api = axios.create({
    baseURL: url
});