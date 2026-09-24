"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VICTION = void 0;
const types_1 = require("../../../types");
exports.VICTION = {
    type: "native",
    id: "VICTION",
    name: "Viction",
    symbol: "VIC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 88,
    rpcUrl: "https://rpc.viction.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
