"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAS = void 0;
const types_1 = require("../../../types");
exports.OAS = {
    type: "native",
    id: "OAS",
    name: "Oasys",
    symbol: "OAS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 248,
    rpcUrl: "https://rpc.mainnet.oasys.games",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
