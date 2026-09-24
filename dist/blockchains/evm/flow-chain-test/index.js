"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FLOW_CHAIN_TEST = void 0;
const types_1 = require("../../../types");
exports.FLOW_CHAIN_TEST = {
    type: 'native',
    id: 'FLOW_CHAIN_TEST',
    name: 'Flow EVM Testnet',
    symbol: 'FLOW',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 545,
    rpcUrl: 'https://testnet.evm.nodes.onflow.org',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
