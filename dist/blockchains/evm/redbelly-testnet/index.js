"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDBELLY_TEST = void 0;
const types_1 = require("../../../types");
exports.REDBELLY_TEST = {
    type: "native",
    id: "REDBELLY_TEST",
    name: "Redbelly Testnet",
    symbol: "RBNT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 153,
    rpcUrl: "https://governors.testnet.redbelly.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
