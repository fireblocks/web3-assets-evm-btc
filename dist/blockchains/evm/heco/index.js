"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HT_CHAIN = void 0;
const types_1 = require("../../../types");
exports.HT_CHAIN = {
    type: "native",
    id: "HT_CHAIN",
    name: "Huobi ECO Chain",
    symbol: "HT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 128,
    rpcUrl: "https://rpc.ankr.com/huobichain",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
