"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEI_TEST = void 0;
const types_1 = require("../../../types");
exports.SEI_TEST = {
    type: "native",
    id: "SEI_TEST",
    name: "Sei Test",
    symbol: "SEI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1328,
    rpcUrl: "https://sei-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
