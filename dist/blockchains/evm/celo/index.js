"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CELO = void 0;
const types_1 = require("../../../types");
exports.CELO = {
    type: "native",
    id: "CELO",
    name: "Celo",
    symbol: "CELO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 42220,
    rpcUrl: "https://forno.celo.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
