"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FASTEX_BAHAMUT = void 0;
const types_1 = require("../../../types");
exports.FASTEX_BAHAMUT = {
    type: "native",
    id: "FASTEX_BAHAMUT",
    name: "Fastex Bahamut",
    symbol: "FTN",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 5165,
    rpcUrl: "https://rpc1.bahamut.io",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
