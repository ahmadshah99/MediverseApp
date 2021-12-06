import RequestClient from "../utils/request";
import { storeData, getData } from '../utils/auth.js';
/*
    Creates a user

    @body{String} firstName
    @body{String} lastName
    @body{String} email
    @body{String} languages[0...]
    @body{String} medicalConditions[0...]
    @body{String} country
 */
export const createUser = (data) => {
    return RequestClient.post('user/create', data)
};

/*
gets a user, given their corresponding id

@params{id} id
 */
export const getUserById = async () => {
    return RequestClient.get('user/findOne',
    {
    headers: {'Authorization': `bearer ${await getData("jwt")}`}
    })
};

/*
    updates user values

    @params{Id} id
    @body{String} firstName
    @body{String} lastName
    @body{String} email
    @body{String} languages[0...]
    @body{String} medicalConditions[0...]
    @body{String} country

 */
export const updateUser = (id, data) => {
    return RequestClient.patch('user/update', {
        params: { id },
        data
    })
}

/*
Deletes user

@params{id} id
 */
export const deleteUser = (id) => {
    return RequestClient.delete('user/delete', {
        params: { id }
    })
}
