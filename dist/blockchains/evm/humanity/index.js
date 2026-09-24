"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HUMANITY = void 0;
const types_1 = require("../../../types");
exports.HUMANITY = {
    type: "native",
    id: "HUMANITY",
    name: "Humanity Protocol",
    symbol: "HUM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 6985385,
    rpcUrl: "https://humanity-mainnet.g.alchemy.com/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
