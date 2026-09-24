"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEMIX_TEST = void 0;
const types_1 = require("../../../types");
exports.WEMIX_TEST = {
    type: "native",
    id: "WEMIX_TEST",
    name: "WEMIX Testnet",
    symbol: "WEMIX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 1112,
    rpcUrl: "https://api.test.wemix.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
