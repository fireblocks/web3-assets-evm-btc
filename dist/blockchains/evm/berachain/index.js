"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BERACHAIN = void 0;
const types_1 = require("../../../types");
exports.BERACHAIN = {
    type: 'native',
    id: 'BERACHAIN',
    name: 'Berachain',
    symbol: 'BER',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 80094,
    rpcUrl: 'https://berachain-rpc.publicnode.com',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
