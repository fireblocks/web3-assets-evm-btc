"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LACHAIN = void 0;
const types_1 = require("../../../types");
exports.LACHAIN = {
    type: "native",
    id: "LACHAIN",
    name: "LaChain",
    symbol: "LAC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 274,
    rpcUrl: "https://rpc1.mainnet.lachain.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
