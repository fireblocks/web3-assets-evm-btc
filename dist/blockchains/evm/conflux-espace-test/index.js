"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFLUX_ESPACE_TEST = void 0;
const types_1 = require("../../../types");
exports.CONFLUX_ESPACE_TEST = {
    type: "native",
    id: "CONFLUX_ESPACE_TEST",
    name: "Conflux eSpace Test",
    symbol: "CON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 71,
    rpcUrl: "https://evmtestnet.confluxrpc.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
