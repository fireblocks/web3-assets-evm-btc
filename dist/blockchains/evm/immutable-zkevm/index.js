"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMX_ZKEVM = void 0;
const types_1 = require("../../../types");
exports.IMX_ZKEVM = {
    type: "native",
    id: "IMX_ZKEVM",
    name: "Immutable zkEVM",
    symbol: "IMX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 13371,
    rpcUrl: "https://rpc.immutable.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
