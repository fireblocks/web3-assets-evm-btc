"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AEVO = void 0;
const types_1 = require("../../../types");
exports.AEVO = {
    type: 'native',
    id: 'AEVO',
    name: 'Aevo',
    symbol: 'AEVO',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 2999,
    rpcUrl: 'https://mainnet.bityuan.com/eth',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
