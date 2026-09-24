"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALEPH_ZERO_EVM = void 0;
const types_1 = require("../../../types");
exports.ALEPH_ZERO_EVM = {
    type: "native",
    id: "ALEPH_ZERO_EVM",
    name: "Aleph Zero EVM",
    symbol: "AZERO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 41455,
    rpcUrl: "https://rpc.alephzero.raas.gelato.cloud",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
