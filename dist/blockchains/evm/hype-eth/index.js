"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HYPE_ETH = void 0;
const types_1 = require("../../../types");
exports.HYPE_ETH = {
    type: "native",
    id: "HYPE_ETH",
    name: "HyperEVM",
    symbol: "HYPE",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 999,
    rpcUrl: "https://rpc.nodeflare.app/hl/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
