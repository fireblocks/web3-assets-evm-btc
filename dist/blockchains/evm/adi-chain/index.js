"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADI_CHAIN = void 0;
const types_1 = require("../../../types");
exports.ADI_CHAIN = {
    type: 'native',
    id: 'ADI_CHAIN',
    name: 'ADI Chain',
    symbol: 'ADI',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 36900,
    rpcUrl: 'https://rpc.adifoundation.ai',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
