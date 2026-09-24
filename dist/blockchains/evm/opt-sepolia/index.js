"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPT_SEPOLIA = void 0;
const types_1 = require("../../../types");
exports.OPT_SEPOLIA = {
    type: "native",
    id: "OPT_SEPOLIA",
    name: "Optimism Testnet Sepolia",
    symbol: "OPT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 11155420,
    rpcUrl: "https://endpoints.omniatech.io/v1/op/sepolia/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
