import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "aa07eb626aeb46d3844150d86eacd0e9",
    }
})