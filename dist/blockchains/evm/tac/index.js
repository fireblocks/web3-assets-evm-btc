"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAC = void 0;
const types_1 = require("../../../types");
exports.TAC = {
    type: "native",
    id: "TAC",
    name: "TAC Mainnet",
    symbol: "TAC",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 239,
    rpcUrl: "https://rpc.ankr.com/tac",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
