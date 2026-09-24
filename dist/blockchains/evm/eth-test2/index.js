"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_TEST2 = void 0;
const types_1 = require("../../../types");
exports.ETH_TEST2 = {
    type: "native",
    id: "ETH_TEST2",
    name: "Ethereum Testnet Kovan",
    symbol: "ETH2",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 42,
    rpcUrl: "https://rpc.lukso.sigmacore.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
