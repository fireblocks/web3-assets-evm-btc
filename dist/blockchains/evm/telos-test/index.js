"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TELOS_TEST = void 0;
const types_1 = require("../../../types");
exports.TELOS_TEST = {
    type: "native",
    id: "TELOS_TEST",
    name: "Telos EVM Test",
    symbol: "TEL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 41,
    rpcUrl: "https://testnet.telos.net/evm",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
