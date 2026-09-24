"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOB_CHAIN = void 0;
const types_1 = require("../../../types");
exports.BOB_CHAIN = {
    type: "native",
    id: "BOB_CHAIN",
    name: "Bob",
    symbol: "BOB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 60808,
    rpcUrl: "https://bob.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
