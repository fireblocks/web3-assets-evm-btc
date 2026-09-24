"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORE_COREDAO_TEST = void 0;
const types_1 = require("../../../types");
exports.CORE_COREDAO_TEST = {
    type: "native",
    id: "CORE_COREDAO_TEST",
    name: "Core DAO Testnet",
    symbol: "CORE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1115,
    rpcUrl: "https://rpc.test.btcs.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
