"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOB_CHAIN_TEST = void 0;
const types_1 = require("../../../types");
exports.BOB_CHAIN_TEST = {
    type: "native",
    id: "BOB_CHAIN_TEST",
    name: "Bob Testnet",
    symbol: "BOB",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 808813,
    rpcUrl: "https://bob-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
