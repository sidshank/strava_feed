import axios from 'axios';
import moment from 'moment';

export default async function refreshAccessToken({ clientId, clientSecret, previousRefreshToken }) {
    const response = await axios.post('https://www.strava.com/api/v3/oauth/token', {
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: previousRefreshToken,
        grant_type: 'refresh_token',
    });

    return {
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
        expiresAt: response.data.expires_at, // UTC seconds
    };
}