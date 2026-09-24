"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARC_TEST = void 0;
const types_1 = require("../../../types");
exports.ARC_TEST = {
    type: "native",
    id: "ARC_TEST",
    name: "Arc Testnet",
    symbol: "ARC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5042002,
    rpcUrl: "https://testrpc.arc.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
