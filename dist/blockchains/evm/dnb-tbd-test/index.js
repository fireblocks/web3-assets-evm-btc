"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNB_TBD_TEST = void 0;
const types_1 = require("../../../types");
exports.DNB_TBD_TEST = {
    type: "native",
    id: "DNB_TBD_TEST",
    name: "DNB CBDC Test",
    symbol: "DNB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 3011,
    rpcUrl: "https://api.mainnet.playa3ull.games",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
