import fs from 'fs';
import path from 'path';

export default function writeConfig({ configuration, configurationFilePath }) {
    const configPath = path.resolve(configurationFilePath);
    fs.writeFileSync(configPath, JSON.stringify(configuration, null, 4));
}
