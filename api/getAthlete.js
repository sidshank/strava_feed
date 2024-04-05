// Call the Strava API endpoint: https://www.strava.com/api/v3/athlete, which returns the authenticated athlete's data.
// Call it with the header 'Authorization: <Access Token>', where <Access Token> is the access token passed to the method input.
// Use axios to make the HTTP request.

import axios from 'axios';

export default async function getAthlete({ accessToken }) {
    const response = await axios.get('https://www.strava.com/api/v3/athlete', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}