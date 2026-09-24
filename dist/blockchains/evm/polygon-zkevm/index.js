"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_ZKEVM = void 0;
const types_1 = require("../../../types");
exports.ETH_ZKEVM = {
    type: "native",
    id: "ETH_ZKEVM",
    name: "Ethereum (Polygon zkEVM)",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1101,
    rpcUrl: "https://zkevm-rpc.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
