import RequestClient from "../utils/request";

/*
    Creates a doctor review

    @body{ID} doctorId
    @body{ID} userId
    @body{Number} rating
    @body{String} description
    @body{String} tags[0...]
 */
export const createDoctorReview = (data) => {
    return RequestClient.post('doctorReview/create', data)
};

/*
    Deletes doctor review given reviewId

    @Params{ID} id
 */
export const deleteDoctorReview = (id) => {
    return RequestClient.delete('doctorReview/delete', {
        params: { id }
    })
};

/*
    gets the reviews for a doctor given id, and the sorting method
    @params{ID} id
    @params{String} sortBy
 */
export const getDoctorsByReview = (id, sortBy) => {
    return RequestClient.get('doctorReview/findForDoctorAndSort', {
        params: {
            id,
            sortBy
        }
    })
};
