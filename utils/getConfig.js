// Utility function that takes a file path to a JSON file and returns the parsed JSON object.
// This is used to read the configuration file.

import fs from 'fs';
import path from 'path';

export default function getConfig({ configurationFilePath }) {
    const configPath = path.resolve(configurationFilePath);
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return config;
}

