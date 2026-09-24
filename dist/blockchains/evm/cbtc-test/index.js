"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CBTC_TEST = void 0;
const types_1 = require("../../../types");
exports.CBTC_TEST = {
    type: "native",
    id: "CBTC_TEST",
    name: "Citrea Testnet",
    symbol: "CBTC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5115,
    rpcUrl: "https://citrea-testnet-rpc.cascadexyz.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
