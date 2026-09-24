"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BERACHAIN_TEST = void 0;
const types_1 = require("../../../types");
exports.BERACHAIN_TEST = {
    type: "native",
    id: "BERACHAIN_TEST",
    name: "Berachain Testnet",
    symbol: "BER",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 80069,
    rpcUrl: "https://berachain-bepolia.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
