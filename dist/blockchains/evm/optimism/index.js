"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_OPT = void 0;
const types_1 = require("../../../types");
exports.ETH_OPT = {
    type: 'native',
    id: 'ETH-OPT',
    name: 'Ethereum (Optimism)',
    symbol: 'ETH',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 10,
    rpcUrl: "https://mainnet.optimism.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
