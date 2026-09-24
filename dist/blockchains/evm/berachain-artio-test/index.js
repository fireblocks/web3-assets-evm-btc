"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BERACHAIN_ARTIO_TEST = void 0;
const types_1 = require("../../../types");
exports.BERACHAIN_ARTIO_TEST = {
    type: 'native',
    id: 'BERACHAIN_ARTIO_TEST',
    name: 'Berachain Artio Test',
    symbol: 'BER',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 80084,
    rpcUrl: 'https://artio.rpc.berachain.com',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
