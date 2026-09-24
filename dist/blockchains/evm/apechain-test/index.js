"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APECHAIN_TEST = void 0;
const types_1 = require("../../../types");
exports.APECHAIN_TEST = {
    type: "native",
    id: "APECHAIN_TEST",
    name: "ApeChain Testnet",
    symbol: "APE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 33111,
    rpcUrl: "https://testnet.apechain.com/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
