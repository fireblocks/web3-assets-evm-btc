"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEDERA_EVM_TEST = void 0;
const types_1 = require("../../../types");
exports.HEDERA_EVM_TEST = {
    type: "native",
    id: "HEDERA_EVM_TEST",
    name: "Hedera Evm Testnet",
    symbol: "HED",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 296,
    rpcUrl: "https://296.rpc.thirdweb.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
