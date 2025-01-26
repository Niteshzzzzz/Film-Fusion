import axios from "../../utils/axios";
import { addPerson } from "../reducers/personSlice";
export { removePerson } from "../reducers/personSlice";

export const asyncAddPerson = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`/person/${id}`)
        const externalId = await axios.get(`/person/${id}/external_ids`)
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`)
        const movieCredits = await axios.get(`/person/${id}/movie_credits`)
        const tvCredits = await axios.get(`/person/${id}/tv_credits`)

        const personDetails = {
            detail: detail.data,
            externalId: externalId.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data
        }
        dispatch(addPerson(personDetails))

    } catch (error) {
        console.log('Error: ', error)
    }
}