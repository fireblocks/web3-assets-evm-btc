"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TELOS = void 0;
const types_1 = require("../../../types");
exports.TELOS = {
    type: "native",
    id: "TELOS",
    name: "Telos EVM",
    symbol: "TEL",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 40,
    rpcUrl: "https://1rpc.io/telos/evm",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
