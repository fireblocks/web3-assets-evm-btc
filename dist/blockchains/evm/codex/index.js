"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODEX = void 0;
const types_1 = require("../../../types");
exports.CODEX = {
    type: 'native',
    id: 'CODEX',
    name: 'Codex',
    symbol: 'COD',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 81224,
    rpcUrl: 'https://rpc.codex.xyz',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
