"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANZ_UAT_TEST = void 0;
const types_1 = require("../../../types");
exports.ANZ_UAT_TEST = {
    type: 'native',
    id: 'ANZ_UAT_TEST',
    name: 'ANZ ETH UAT Testnet',
    symbol: 'ANZ',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 112312121,
    rpcUrl: 'https://anz-uat.test',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
