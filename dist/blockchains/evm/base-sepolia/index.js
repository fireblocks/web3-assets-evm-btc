"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASECHAIN_ETH_TEST5 = void 0;
const types_1 = require("../../../types");
exports.BASECHAIN_ETH_TEST5 = {
    type: 'native',
    id: 'BASECHAIN_ETH_TEST5',
    name: 'Base Sepolia',
    symbol: 'ETH',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 84532,
    rpcUrl: "https://sepolia.base.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
