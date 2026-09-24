"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OMNI_EVM = void 0;
const types_1 = require("../../../types");
exports.OMNI_EVM = {
    type: 'native',
    id: 'OMNI_EVM',
    name: 'Nomina',
    symbol: 'OMNI',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 166,
    rpcUrl: 'https://mainnet.nomina.io',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
