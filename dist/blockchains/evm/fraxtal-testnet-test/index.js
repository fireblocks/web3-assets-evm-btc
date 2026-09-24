"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRAXTAL_TESTNET_TEST = void 0;
const types_1 = require("../../../types");
exports.FRAXTAL_TESTNET_TEST = {
    type: "native",
    id: "FRAXTAL_TESTNET_TEST",
    name: "Fraxtal Testnet",
    symbol: "FRA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 2523,
    rpcUrl: "https://fraxtal-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
