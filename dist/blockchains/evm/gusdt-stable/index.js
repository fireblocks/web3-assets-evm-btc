"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUSDT_STABLE = void 0;
const types_1 = require("../../../types");
exports.GUSDT_STABLE = {
    type: "native",
    id: "GUSDT_STABLE",
    name: "Stable",
    symbol: "GUS",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 988,
    rpcUrl: "https://stable-mainnet.rpc.sentio.xyz",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
