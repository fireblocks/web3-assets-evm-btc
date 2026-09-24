"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOPHON_TEST = void 0;
const types_1 = require("../../../types");
exports.SOPHON_TEST = {
    type: "native",
    id: "SOPHON_TEST",
    name: "Sophon Testnet",
    symbol: "SOP",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 531050104,
    rpcUrl: "https://rpc.testnet.sophon.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
