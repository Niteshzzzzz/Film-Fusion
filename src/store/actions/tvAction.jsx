import axios from "../../utils/axios";
import { addTv } from "../reducers/tvSlice";
export { removeTv } from "../reducers/tvSlice";

export const asyncAddtv = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`/tv/${id}`)
        const externalId = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const videos = await axios.get(`/tv/${id}/videos`)
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`)
        const translations = await axios.get(`/tv/${id}/translations`)

        const tvDetails = {
            detail: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find((v) => v.type == 'Trailer'),
            watchProviders: watchProviders.data.results.IN,
            translations: translations.data.translations
        }
        dispatch(addTv(tvDetails))

    } catch (error) {
        console.log('Error: ', error)
    }
}