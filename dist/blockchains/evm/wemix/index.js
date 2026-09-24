"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEMIX = void 0;
const types_1 = require("../../../types");
exports.WEMIX = {
    type: "native",
    id: "WEMIX",
    name: "WEMIX",
    symbol: "WEMIX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1111,
    rpcUrl: "https://api.wemix.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
