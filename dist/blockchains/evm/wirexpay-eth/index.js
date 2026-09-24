"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIREXPAY_ETH = void 0;
const types_1 = require("../../../types");
exports.WIREXPAY_ETH = {
    type: "native",
    id: "WIREXPAY_ETH",
    name: "Wirex Pay Mainnet",
    symbol: "WIR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 31415,
    rpcUrl: "https://rpc.wirexpaychain.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
