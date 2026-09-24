"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONAD_TEST = void 0;
const types_1 = require("../../../types");
exports.MONAD_TEST = {
    type: "native",
    id: "MONAD_TEST",
    name: "Monad Testnet",
    symbol: "MON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 10143,
    rpcUrl: "https://monad-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
