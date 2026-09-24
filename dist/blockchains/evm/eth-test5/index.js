"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_TEST5 = void 0;
const types_1 = require("../../../types");
exports.ETH_TEST5 = {
    type: "native",
    id: "ETH_TEST5",
    name: "Ethereum Testnet Sepolia",
    symbol: "ETH5",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 11155111,
    rpcUrl: "https://ethereum-sepolia-rpc.publicnode.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
