"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XDAI = void 0;
const types_1 = require("../../../types");
exports.XDAI = {
    type: "native",
    id: "xDAI",
    name: "Gnosis",
    symbol: "xDAI",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 100,
    rpcUrl: "https://rpc.gnosischain.com",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
