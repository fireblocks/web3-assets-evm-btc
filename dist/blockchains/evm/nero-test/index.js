"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NERO_TEST = void 0;
const types_1 = require("../../../types");
exports.NERO_TEST = {
    type: "native",
    id: "NERO_TEST",
    name: "Nero Testnet",
    symbol: "NERO",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 689,
    rpcUrl: "https://rpc-testnet.nerochain.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
