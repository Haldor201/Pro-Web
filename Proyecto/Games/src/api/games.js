import axios from "./axios.js"

export const allGamesRequest=()=> axios.get(`/api/games/allgames`)
export const allGamesPRequest=()=> axios.get(`/api/games/allgamesP`)
export const buyGameRequest=(game)=> axios.post(`/api/games//buygame`,game)