"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_NAHMII = void 0;
const types_1 = require("../../../types");
exports.ETH_NAHMII = {
    type: "native",
    id: "ETH_NAHMII",
    name: "Nahmii",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 4061,
    rpcUrl: "https://rpc.n3.nahmii.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
