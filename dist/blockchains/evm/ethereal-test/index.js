"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETHEREAL_TEST = void 0;
const types_1 = require("../../../types");
exports.ETHEREAL_TEST = {
    type: "native",
    id: "ETHEREAL_TEST",
    name: "Ethereal Testnet",
    symbol: "ETH",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 13374202,
    rpcUrl: "https://rpc.etherealtest.net",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
