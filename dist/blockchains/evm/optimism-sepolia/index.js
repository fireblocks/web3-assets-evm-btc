"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_OPT_SEPOLIA = void 0;
const types_1 = require("../../../types");
exports.ETH_OPT_SEPOLIA = {
    type: 'native',
    id: 'ETH-OPT-SEPOLIA',
    name: 'Ethereum (Optimism Sepolia)',
    symbol: 'ETH',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 11155420,
    rpcUrl: "https://sepolia.optimism.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
