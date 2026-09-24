"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORE_COREDAO = void 0;
const types_1 = require("../../../types");
exports.CORE_COREDAO = {
    type: "native",
    id: "CORE_COREDAO",
    name: "Core DAO",
    symbol: "CORE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1116,
    rpcUrl: "https://rpc.coredao.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
