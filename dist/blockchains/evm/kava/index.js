"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KAVA_KAVA = void 0;
const types_1 = require("../../../types");
exports.KAVA_KAVA = {
    type: "native",
    id: "KAVA_KAVA",
    name: "Kava",
    symbol: "KAVA",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 2222,
    rpcUrl: "https://evm.kava-rpc.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
