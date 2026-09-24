"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONAD = void 0;
const types_1 = require("../../../types");
exports.MONAD = {
    type: "native",
    id: "MONAD",
    name: "Monad",
    symbol: "MON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 143,
    rpcUrl: "https://monad-mainnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
