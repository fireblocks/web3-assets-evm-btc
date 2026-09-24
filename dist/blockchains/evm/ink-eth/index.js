"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INK_ETH = void 0;
const types_1 = require("../../../types");
exports.INK_ETH = {
    type: "native",
    id: "INK_ETH",
    name: "Ink",
    symbol: "INK",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 57073,
    rpcUrl: "https://ink.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
