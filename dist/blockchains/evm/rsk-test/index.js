"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSK_TEST = void 0;
const types_1 = require("../../../types");
exports.RSK_TEST = {
    type: "native",
    id: "RSK_TEST",
    name: "Rootstock Testnet",
    symbol: "RSK",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 31,
    rpcUrl: "https://rootstock-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
