"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTAR_TEST = void 0;
const types_1 = require("../../../types");
exports.ASTAR_TEST = {
    type: "native",
    id: "ASTAR_TEST",
    name: "Astar Testnet (Shibuya)",
    symbol: "AST",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 81,
    rpcUrl: "https://rpc.shibuya.astar.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
