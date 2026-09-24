"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASECHAIN_ETH_TEST3 = void 0;
const types_1 = require("../../../types");
exports.BASECHAIN_ETH_TEST3 = {
    type: "native",
    id: "BASECHAIN_ETH_TEST3",
    name: "Base Goerli",
    symbol: "BAS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 84531,
    rpcUrl: "https://goerli.base.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
