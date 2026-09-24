"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_ZKEVM_TEST = void 0;
const types_1 = require("../../../types");
exports.ETH_ZKEVM_TEST = {
    type: "native",
    id: "ETH_ZKEVM_TEST",
    name: "Ethereum (Polygon zkEVM Cardona)",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 2442,
    rpcUrl: "https://rpc.cardona.zkevm-rpc.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
