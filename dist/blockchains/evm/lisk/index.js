"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LISK = void 0;
const types_1 = require("../../../types");
exports.LISK = {
    type: "native",
    id: "LISK",
    name: "Lisk",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1135,
    rpcUrl: "https://rpc.api.lisk.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
