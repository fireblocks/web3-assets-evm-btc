"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMX_ZKEVM_TEST = void 0;
const types_1 = require("../../../types");
exports.IMX_ZKEVM_TEST = {
    type: "native",
    id: "IMX_ZKEVM_TEST",
    name: "Immutable zkEVM Testnet",
    symbol: "IMX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 13473,
    rpcUrl: "https://rpc.testnet.immutable.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
