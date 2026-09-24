"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMARTBCH = void 0;
const types_1 = require("../../../types");
exports.SMARTBCH = {
    type: "native",
    id: "SMARTBCH",
    name: "SmartBCH",
    symbol: "BCH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 10000,
    rpcUrl: "https://smartbch.greyh.at",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
