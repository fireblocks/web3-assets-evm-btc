"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MORPH_TEST = void 0;
const types_1 = require("../../../types");
exports.MORPH_TEST = {
    type: 'native',
    id: 'MORPH_TEST',
    name: 'Morph Test',
    symbol: 'MOR',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 2910,
    rpcUrl: 'https://rpc-hoodi.morphl2.io',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
