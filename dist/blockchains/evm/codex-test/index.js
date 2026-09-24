"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODEX_TEST = void 0;
const types_1 = require("../../../types");
exports.CODEX_TEST = {
    type: 'native',
    id: 'CODEX_TEST',
    name: 'Codex Testnet',
    symbol: 'COD',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 812242,
    rpcUrl: 'https://rpc.codex-stg.xyz',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
