import _ from 'lodash';

export default function mergeConfig({ currentConfiguration, updatedConfiguration }) {
    return _.merge(currentConfiguration, updatedConfiguration);
}
