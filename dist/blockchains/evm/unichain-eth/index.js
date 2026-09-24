"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNICHAIN_ETH = void 0;
const types_1 = require("../../../types");
exports.UNICHAIN_ETH = {
    type: "native",
    id: "UNICHAIN_ETH",
    name: "Unichain",
    symbol: "UNI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 130,
    rpcUrl: "https://unichain-rpc.publicnode.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
