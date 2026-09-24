"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COREDAO_TEST = void 0;
const types_1 = require("../../../types");
exports.COREDAO_TEST = {
    type: "native",
    id: "COREDAO_TEST",
    name: "Core DAO Testnet",
    symbol: "COR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1115,
    rpcUrl: "https://core-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
