"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHEREAL_MAINNET = void 0;
const types_1 = require("../../../types");
exports.ETHEREAL_MAINNET = {
    type: "native",
    id: "ETHEREAL_MAINNET",
    name: "Ethereal Mainnet",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 5064014,
    rpcUrl: "https://rpc.ethereal.trade",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
