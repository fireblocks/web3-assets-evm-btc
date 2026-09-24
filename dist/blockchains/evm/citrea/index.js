"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CITREA = void 0;
const types_1 = require("../../../types");
exports.CITREA = {
    type: "native",
    id: "CITREA",
    name: "cBTC",
    symbol: "CIT",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 4114,
    rpcUrl: "https://rpc.mainnet.citrea.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
