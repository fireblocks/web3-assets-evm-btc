"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCROLL = void 0;
const types_1 = require("../../../types");
exports.SCROLL = {
    type: "native",
    id: "SCROLL",
    name: "Scroll",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 534352,
    rpcUrl: "https://rpc.scroll.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
