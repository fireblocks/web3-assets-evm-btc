"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SONIC_TESTNET2_TEST = void 0;
const types_1 = require("../../../types");
exports.SONIC_TESTNET2_TEST = {
    type: "native",
    id: "SONIC_TESTNET2_TEST",
    name: "Sonic Testnet2",
    symbol: "SON",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 14601,
    rpcUrl: "https://sonic-testnet-v2.drpc.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
