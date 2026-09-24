"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_SONEIUM = void 0;
const types_1 = require("../../../types");
exports.ETH_SONEIUM = {
    type: "native",
    id: "ETH_SONEIUM",
    name: "Soneium",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1868,
    rpcUrl: "https://rpc.soneium.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
