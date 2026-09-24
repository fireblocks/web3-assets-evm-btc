"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHERLINK = void 0;
const types_1 = require("../../../types");
exports.ETHERLINK = {
    type: "native",
    id: "ETHERLINK",
    name: "Etherlink",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 42793,
    rpcUrl: "https://rpc.ankr.com/etherlink_mainnet",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
