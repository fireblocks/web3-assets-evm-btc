"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFLUX_ESPACE = void 0;
const types_1 = require("../../../types");
exports.CONFLUX_ESPACE = {
    type: "native",
    id: "CONFLUX_ESPACE",
    name: "Conflux eSpace",
    symbol: "CON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1030,
    rpcUrl: "https://evm.confluxrpc.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
