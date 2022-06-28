const pm2 = require('pm2')
const state = {
    connected: false,
    stable: true,
};

const connect = (noDaemon: boolean = false) => new Promise((resolve, reject) => pm2.connect(false, (err) => err ? reject(err) : resolve('')));
const disconnect = () => new Promise((resolve, reject) => pm2.list((err) => err ? reject(err) : resolve([])));

export default async (fn: any) => {
    try {
        if (!state.stable) {
            await disconnect();
            state.connected = false;
            state.stable = true;
        }

        if (!state.connected) {
            await connect();
            state.connected = true;
            state.stable = true;
        }
    }
    catch (err) {
        state.connected = false;
        return;
    }
    if (fn) {
        return await fn();
    }
};

export const getState = () => state;