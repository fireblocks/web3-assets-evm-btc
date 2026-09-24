"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_G_EVM = void 0;
const types_1 = require("../../../types");
exports.ZERO_G_EVM = {
    type: "native",
    id: "ZERO_G_EVM",
    name: "0G Aristotle",
    symbol: "ZER",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 16661,
    rpcUrl: "https://evmrpc.0g.ai",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
