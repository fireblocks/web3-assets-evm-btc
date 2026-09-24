"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CENTRIFUGE = void 0;
const types_1 = require("../../../types");
exports.CENTRIFUGE = {
    type: "native",
    id: "CENTRIFUGE",
    name: "Centrifuge",
    symbol: "CEN",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 2031,
    rpcUrl: "https://fullnode.centrifuge.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
