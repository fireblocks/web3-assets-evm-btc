"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MANTA = void 0;
const types_1 = require("../../../types");
exports.MANTA = {
    type: "native",
    id: "MANTA",
    name: "Manta",
    symbol: "MAN",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 169,
    rpcUrl: "https://1rpc.io/manta",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
