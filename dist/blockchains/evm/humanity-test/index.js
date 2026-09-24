"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HUMANITY_TEST = void 0;
const types_1 = require("../../../types");
exports.HUMANITY_TEST = {
    type: "native",
    id: "HUMANITY_TEST",
    name: "Humanity Protocol Testnet",
    symbol: "HUM",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 7080969,
    rpcUrl: "https://humanity-testnet.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
