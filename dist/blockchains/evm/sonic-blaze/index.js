"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SONIC_TEST = void 0;
const types_1 = require("../../../types");
exports.SONIC_TEST = {
    type: "native",
    id: "SONIC_TEST",
    name: "Sonic Blaze Testnet",
    symbol: "S",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 57054,
    rpcUrl: "https://rpc.blaze.soniclabs.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
