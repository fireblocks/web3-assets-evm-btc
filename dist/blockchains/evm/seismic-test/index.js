"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEISMIC_TEST = void 0;
const types_1 = require("../../../types");
exports.SEISMIC_TEST = {
    type: "native",
    id: "SEISMIC_TEST",
    name: "Seismic Testnet",
    symbol: "SEI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 5124,
    rpcUrl: "https://gcp-1.seismictest.net/rpc",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
