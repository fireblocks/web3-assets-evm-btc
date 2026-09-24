"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_TEST3 = void 0;
const types_1 = require("../../../types");
exports.ETH_TEST3 = {
    type: "native",
    id: "ETH_TEST3",
    name: "Ethereum Testnet Goerli",
    symbol: "ETH3",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5,
    rpcUrl: "https://endpoints.omniatech.io/v1/eth/goerli/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
