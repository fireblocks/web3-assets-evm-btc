"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAS_TEST = void 0;
const types_1 = require("../../../types");
exports.OAS_TEST = {
    type: "native",
    id: "OAS_TEST",
    name: "Oasys Testnet",
    symbol: "OAS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 9372,
    rpcUrl: "https://rpc.testnet.oasys.games",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
