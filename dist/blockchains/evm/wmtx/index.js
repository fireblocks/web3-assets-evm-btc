"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WMTX = void 0;
const types_1 = require("../../../types");
exports.WMTX = {
    type: "native",
    id: "WMTX",
    name: "WorldMobie Chain ",
    symbol: "WMTX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 869,
    rpcUrl: "https://worldmobilechain-mainnet.g.alchemy.com/public",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
