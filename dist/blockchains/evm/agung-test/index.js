"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AGUNG_TEST = void 0;
const types_1 = require("../../../types");
exports.AGUNG_TEST = {
    type: "native",
    id: "AGUNG_TEST",
    name: "Agung (Testnet)",
    symbol: "AGU",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 9990,
    rpcUrl: "https://wss-async.agung.peaq.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
