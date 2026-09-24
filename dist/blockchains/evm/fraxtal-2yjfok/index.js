"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRAXTAL_2YJFOK = void 0;
const types_1 = require("../../../types");
exports.FRAXTAL_2YJFOK = {
    type: "native",
    id: "FRAXTAL_2YJFOK",
    name: "Fraxtal",
    symbol: "FRA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 252,
    rpcUrl: "https://fraxtal.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
