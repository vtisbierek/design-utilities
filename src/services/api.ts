import axios from "axios";

const api = axios.create({ //cria um objeto axios com um monte de métodos, e define o endpoint base da API com esse endereço aí
    baseURL: "https://openapi.naver.com/v1/papago/n2mt",
});

export default api;