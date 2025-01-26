import axios from "../../utils/axios";
import { addMovie } from "../reducers/movieSlice";
export { removeMovie } from "../reducers/movieSlice";

export const asyncAddMovie = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalId = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
        const translations = await axios.get(`/movie/${id}/translations`)

        const movieDetails = {
            detail: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find((v) => v.type == 'Trailer'),
            watchProviders: watchProviders.data.results.IN,
            translations: translations.data.translations
        }
        dispatch(addMovie(movieDetails))

    } catch (error) {
        console.log('Error: ', error)
    }
}