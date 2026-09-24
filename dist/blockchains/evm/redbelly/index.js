"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDBELLY = void 0;
const types_1 = require("../../../types");
exports.REDBELLY = {
    type: "native",
    id: "REDBELLY",
    name: "Redbelly",
    symbol: "RBNT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 151,
    rpcUrl: "https://governors.mainnet.redbelly.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
