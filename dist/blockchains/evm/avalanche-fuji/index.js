"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVALANCHE_FUJI = void 0;
const types_1 = require("../../../types");
exports.AVALANCHE_FUJI = {
    type: "native",
    id: "AVALANCHE_FUJI",
    name: "Avalanche Fuji Testnet",
    symbol: "AVA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 43113,
    rpcUrl: "https://endpoints.omniatech.io/v1/avax/fuji/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
