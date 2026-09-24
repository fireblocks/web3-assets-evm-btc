"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SONIC = void 0;
const types_1 = require("../../../types");
exports.SONIC = {
    type: "native",
    id: "SONIC",
    name: "Sonic",
    symbol: "S",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 146,
    rpcUrl: "https://rpc.soniclabs.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
