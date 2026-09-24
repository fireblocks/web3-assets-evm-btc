"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILECOIN_FEVM = void 0;
const types_1 = require("../../../types");
exports.FILECOIN_FEVM = {
    type: "native",
    id: "FILECOIN_FEVM",
    name: "Filecoin EVM",
    symbol: "FIL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 314,
    rpcUrl: "https://api.node.glif.io/rpc/v1",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
