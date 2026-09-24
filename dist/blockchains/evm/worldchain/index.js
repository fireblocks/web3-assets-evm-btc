"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORLDCHAIN = void 0;
const types_1 = require("../../../types");
exports.WORLDCHAIN = {
    type: "native",
    id: "WORLDCHAIN",
    name: "World Chain",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 480,
    rpcUrl: "https://worldchain-mainnet.g.alchemy.com/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
