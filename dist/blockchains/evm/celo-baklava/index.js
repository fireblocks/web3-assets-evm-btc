"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CELO_BAK = void 0;
const types_1 = require("../../../types");
exports.CELO_BAK = {
    type: "native",
    id: "CELO_BAK",
    name: "Celo Baklava",
    symbol: "CELO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 62320,
    rpcUrl: "https://baklava-forno.celo-testnet.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
