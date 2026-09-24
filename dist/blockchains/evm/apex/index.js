"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APEX = void 0;
const types_1 = require("../../../types");
exports.APEX = {
    type: "native",
    id: "APEX",
    name: "Apex Fusion Nexus",
    symbol: "APEX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 9069,
    rpcUrl: "https://rpc.apexfusionnexus.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
