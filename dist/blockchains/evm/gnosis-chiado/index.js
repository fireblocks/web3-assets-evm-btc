"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XDAI_TEST = void 0;
const types_1 = require("../../../types");
exports.XDAI_TEST = {
    type: "native",
    id: "XDAI_TEST",
    name: "Gnosis Chiado",
    symbol: "XDAI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 10200,
    rpcUrl: "https://rpc.chiadochain.net",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
