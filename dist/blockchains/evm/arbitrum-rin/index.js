"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARBITRUM_RIN = void 0;
const types_1 = require("../../../types");
exports.ARBITRUM_RIN = {
    type: "native",
    id: "ARBITRUM_RIN",
    name: "Arbitrum Testnet Rinkeby",
    symbol: "ARB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 421611,
    rpcUrl: "https://rinkeby.arbitrum.io/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
