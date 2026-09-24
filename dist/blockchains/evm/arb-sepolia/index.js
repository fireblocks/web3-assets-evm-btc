"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARB_SEPOLIA = void 0;
const types_1 = require("../../../types");
exports.ARB_SEPOLIA = {
    type: 'native',
    id: 'ARB_SEPOLIA',
    name: 'Arbitrum Testnet Sepolia',
    symbol: 'ARB',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 421614,
    rpcUrl: 'https://endpoints.omniatech.io/v1/arbitrum/sepolia/public',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
