import { Configuration } from './../models/configuration';
import { State } from './state';

export function getConfiguration(id: string): Configuration {
    return State.configurations.get(id);
}

export function getAllConfigurations(): Configuration[] {
    return Array.from(State.configurations.values());
}

export function saveNewConfiguration(config: Configuration) {
    if (State.configurations.has(config.id)) {
        throw new Error();
    }
    State.configurations.set(config.id, config);
}

export function updateConfiguration(config: Configuration) {
    if (!State.configurations.has(config.id)) {
        throw new Error();
    }
    State.configurations.set(config.id, config);
}
