"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XDC = void 0;
const types_1 = require("../../../types");
exports.XDC = {
    type: "native",
    id: "XDC",
    name: "XinFin",
    symbol: "XDC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 50,
    rpcUrl: "https://rpc.ankr.com/xdc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
