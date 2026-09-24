"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FLOW_CHAIN = void 0;
const types_1 = require("../../../types");
exports.FLOW_CHAIN = {
    type: "native",
    id: "FLOW_CHAIN",
    name: "Flow EVM",
    symbol: "FLOW",
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 747,
    rpcUrl: "https://mainnet.evm.nodes.onflow.org",
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: "single",
    },
};
