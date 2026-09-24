"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANTO_TEST = void 0;
const types_1 = require("../../../types");
exports.CANTO_TEST = {
    type: "native",
    id: "CANTO_TEST",
    name: "Canto Testnet",
    symbol: "CANTO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 7701,
    rpcUrl: "https://canto-testnet.plexnode.wtf",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
