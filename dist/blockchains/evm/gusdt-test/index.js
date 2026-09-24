"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUSDT_TEST = void 0;
const types_1 = require("../../../types");
exports.GUSDT_TEST = {
    type: "native",
    id: "GUSDT_TEST",
    name: "Stable Test",
    symbol: "GUS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 2201,
    rpcUrl: "https://rpc.testnet.stable.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
