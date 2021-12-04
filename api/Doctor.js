import RequestClient from "../utils/request";
import { storeData, getData } from '../utils/auth.js';

/*
Creates a doctor object

@body{String} firstName
@body{String} lastName
@body{String} email
@body{String} languages[0]
@body{String} expertise[0]
@body{String} clinicName
@body{String} streetAddress
@body{String} city
@body{String} province
@body{String} country
@body{Boolean} walkin
 */
export const createDoctor = (data) => {
    return RequestClient.post('doctor/create', data)
};

/*
gets a doctor, given their corresponding id

@params{id} id
 */
export const getDoctorById = (id) => {
    return RequestClient.get('doctor/findOne', {
        params: { id }
    })
};

/*
returns doctors matching search criteria

@body{String} languages[0]
@body{String} expertise[0]
@body{String} sourceAddress
@body{Boolean} walkin
@body{Number} maxDistance
@body{String} sortBy
 */
export const getDoctorsBySearch = async (data) => {
    return RequestClient.post('doctor/findBySearch', data)
}


/*
updates doctor values

@params{id} id
@body{String} firstName
@body{String} lastName
@body{String} email
@body{String} languages[0]
@body{String} expertise[0]
@body{String} clinicName
@body{String} streetAddress
@body{String} city
@body{String} province
@body{String} country
@body{Boolean} walkin
 */
export const updateDoctor = (id, data) => {
    return RequestClient.patch('doctor/update', {
        params: { id },
        data
    })
}

/*
Deletes doctor

@params{id} id
 */
export const deleteDoctor = (id) => {
    return RequestClient.delete('doctor/delete', {
        params: { id }
    })
}
