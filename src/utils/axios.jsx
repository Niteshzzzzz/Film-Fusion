import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjBlY2E4MzllMDM4OGU5YTcwNDE0OTQ3NWI5ZDE1OSIsIm5iZiI6MTczNzMxMDg4My45NTM5OTk4LCJzdWIiOiI2NzhkNDJhMzg4MGY2YmQzODQ2ZTAwZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xfAa-ElOFrPV7Oa8T5K0IHFh9h7hq6o69W_ZnrZ5Lm4'
    }
})

export default instance