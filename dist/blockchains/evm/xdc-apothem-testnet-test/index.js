"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XDC_APOTHEM_TESTNET_TEST = void 0;
const types_1 = require("../../../types");
exports.XDC_APOTHEM_TESTNET_TEST = {
    type: "native",
    id: "XDC_APOTHEM_TESTNET_TEST",
    name: "XDC Apothem Testnet Test",
    symbol: "XDC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 51,
    rpcUrl: "https://erpc.apothem.network",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
