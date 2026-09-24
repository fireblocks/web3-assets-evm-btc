"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_TEST_HOODI = void 0;
const types_1 = require("../../../types");
exports.ETH_TEST_HOODI = {
    type: "native",
    id: "ETH_TEST_HOODI",
    name: "Ethereum Hoodi Testnet",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 560048,
    rpcUrl: "https://0xrpc.io/hoodi",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
