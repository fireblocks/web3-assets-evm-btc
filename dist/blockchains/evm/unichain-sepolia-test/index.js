"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNICHAIN_SEPOLIA_TEST = void 0;
const types_1 = require("../../../types");
exports.UNICHAIN_SEPOLIA_TEST = {
    type: "native",
    id: "UNICHAIN_SEPOLIA_TEST",
    name: "Unichain Sepolia Test",
    symbol: "UNI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1301,
    rpcUrl: "https://endpoints.omniatech.io/v1/unichain/sepolia/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
