"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEGA_ETH_TEST = void 0;
const types_1 = require("../../../types");
exports.MEGA_ETH_TEST = {
    type: "native",
    id: "MEGA_ETH_TEST",
    name: "MegaETH Testnet",
    symbol: "MEGA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 6342,
    rpcUrl: "https://rpc.example.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
