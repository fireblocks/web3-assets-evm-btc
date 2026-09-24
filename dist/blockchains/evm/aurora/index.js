"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AURORA_DEV = void 0;
const types_1 = require("../../../types");
exports.AURORA_DEV = {
    type: 'native',
    id: 'AURORA_DEV',
    name: 'Aurora',
    symbol: 'ETH',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1313161554,
    rpcUrl: 'https://mainnet.aurora.dev',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
