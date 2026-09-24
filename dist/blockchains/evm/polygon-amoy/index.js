"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AMOY_POLYGON_TEST = void 0;
const types_1 = require("../../../types");
exports.AMOY_POLYGON_TEST = {
    type: "native",
    id: "AMOY_POLYGON_TEST",
    name: "Polygon Amoy",
    symbol: "MATIC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 80002,
    rpcUrl: "https://polygon-amoy-bor-rpc.publicnode.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
