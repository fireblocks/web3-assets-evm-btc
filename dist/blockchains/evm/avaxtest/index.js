"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAXTEST = void 0;
const types_1 = require("../../../types");
exports.AVAXTEST = {
    type: 'native',
    id: 'AVAXTEST',
    name: 'Avalanche Fuji Testnet',
    symbol: 'AVAX',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 43113,
    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
