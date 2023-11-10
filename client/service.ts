import axios from "axios";

export function getPlayListById(id: number = 24381616) {
    return axios.get(`http://iwenwiki.com:3000/playlist/detail?id=${id}`)
}