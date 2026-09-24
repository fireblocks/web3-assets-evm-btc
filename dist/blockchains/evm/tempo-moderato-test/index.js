"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPO_MODERATO_TEST = void 0;
const types_1 = require("../../../types");
exports.TEMPO_MODERATO_TEST = {
    type: "native",
    id: "TEMPO_MODERATO_TEST",
    name: "Tempo Moderato Test",
    symbol: "TEM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 42431,
    rpcUrl: "https://rpc.testnet.tempo.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
