"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLX_TEST = void 0;
const types_1 = require("../../../types");
exports.VLX_TEST = {
    type: "native",
    id: "VLX_TEST",
    name: "Velas Testnet",
    symbol: "VLX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 111,
    rpcUrl: "https://explorer.testnet.velas.com/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
