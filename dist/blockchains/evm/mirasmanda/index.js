"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIRASMANDA = void 0;
const types_1 = require("../../../types");
exports.MIRASMANDA = {
    type: "native",
    id: "MIRASMANDA",
    name: "Mirasmanda",
    symbol: "MIR",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1213549903,
    rpcUrl: "https://rpc.evm.mirasmanda.uz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
