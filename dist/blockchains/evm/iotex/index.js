"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOTX_IOTEX = void 0;
const types_1 = require("../../../types");
exports.IOTX_IOTEX = {
    type: "native",
    id: "IOTX_IOTEX",
    name: "IoTeX",
    symbol: "IOTX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 4689,
    rpcUrl: "https://babel-api.mainnet.iotex.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
