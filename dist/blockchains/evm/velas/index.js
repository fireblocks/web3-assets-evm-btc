"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLX_VLX = void 0;
const types_1 = require("../../../types");
exports.VLX_VLX = {
    type: "native",
    id: "VLX_VLX",
    name: "Velas",
    symbol: "VLX",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 106,
    rpcUrl: "https://mainnet.velas.com/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
