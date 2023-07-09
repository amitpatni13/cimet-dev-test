import needle from 'needle';
import dotenv from 'dotenv';

dotenv.config();

let token = ''; // Global variable to store token

/**
 * To generate the API token
 */
const getToken = () => {
    const url = 'https://devcore02.cimet.io/v1/generate-token';
    const method = 'post';
    const headers = {
        'api-key': process.env.CIMET_API_KEY,
    };
    const body = {};
    return needle(method, url, body, { json: true, headers }).then((response) => {
        const body = JSON.parse(response.body);
        return body?.data?.token || '';
    }).catch((err) => {
        return err;
    });
};

/**
 * To get the plan list
 * @param authToken Token for authentication
 */
const getPlanList = (authToken) => {
    const url = 'https://devcore02.cimet.io/v1/plan-list';
    const method = 'post';
    const headers = {
        'api-key': process.env.CIMET_API_KEY,
        'auth-token' : authToken
    };
    const body = {
        session_id: process.env.CIMET_SESSION_ID
    };
    return needle(method, url, body, { json: true, headers }).then(async (response) => {
        // Token Expired Response: { status: 0, message: 'Your token has been expired.' }
        if (response.body.status === 0 && response.body.message === 'Your token has been expired.') { // Token expirey check from response
            token = ''; // resetting global token variable for refresh 
            return await getAPIData(); // re-calling the API to get page data
        }
        return response.body || null;
    }).catch((err) => {
        return err;
    });
};

/**
 * Return the API data response and handle token
 */
const getAPIData = async () => {
    let data = null;
    token = await refreshToken();
    data = await getPlanList(token);
    return data;
}

/**
 * Return the API token and refresh it in case of expiry
 */
const refreshToken = async () => {
    if (token?.length) { // If token already storted, returning token
        return token;
    }
    return await getToken(); // calling api to get token
}

export default { getAPIData };
