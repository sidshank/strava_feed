import getConfig from './utils/getConfig.js';
import getAthlete from './api/getAthlete.js';
import mergeConfig from './utils/mergeConfig.js';
import refreshAccessToken from './api/refreshAccessToken.js';
import hasAccessTokenExpired from './utils/hasAccessTokenExpired.js';
import writeConfig from './utils/writeConfig.js';

const CONFIGURATION_FILE_PATH = './config.json';

const config = getConfig({ configurationFilePath: CONFIGURATION_FILE_PATH });
console.log(config);

const hasExpired = hasAccessTokenExpired({ configuration: config });

if (hasExpired) {
    console.log('The access token has expired.');

    // Refresh the access token.
    const { accessToken, refreshToken, expiresAt } = await refreshAccessToken({
        clientId: config.client_id,
        clientSecret: config.client_secret,
        previousRefreshToken: config.refresh_token,
    });

    // Update the configuration with the new access token.
    const newConfig = mergeConfig({
        currentConfiguration: config,
        updatedConfiguration: {
            access_token: {
                value: accessToken,
                expires_at: expiresAt,
            },
            refresh_token: refreshToken,
        }
    });

    writeConfig({
        configuration: newConfig,
        configurationFilePath: CONFIGURATION_FILE_PATH
    });
}

const athlete = await getAthlete({ accessToken: config.access_token.value });
console.log(athlete);
