"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEGAETH_MAINNET = void 0;
const types_1 = require("../../../types");
exports.MEGAETH_MAINNET = {
    type: "native",
    id: "MEGAETH_MAINNET",
    name: "MegaETH Mainnet",
    symbol: "MEG",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 4326,
    rpcUrl: "https://megaeth.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
