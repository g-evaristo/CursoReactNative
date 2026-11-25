import axios from "axios";

// API de moedas:
// https://economia.awesomeapi.com.br/json/all
// https://economia.awesomeapi.com.br/json/all/BTC-BRL

// Rota para buscar BTC para BRL: all/BTC-BRL

export const api = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/json/"
});