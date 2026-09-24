"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METIS_EVM = void 0;
const types_1 = require("../../../types");
exports.METIS_EVM = {
    type: "native",
    id: "METIS_EVM",
    name: "Metis",
    symbol: "MET",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 1088,
    rpcUrl: "https://metis.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
