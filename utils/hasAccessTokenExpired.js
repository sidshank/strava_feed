import moment from 'moment';

export default function hasAccessTokenExpired({ configuration }) {
    const expiresAt = configuration.access_token.expires_at;
    const expirationTime = expiresAt;
    const now = moment().unix();
    return now > expirationTime;
}