"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBTC_TEST = void 0;
const types_1 = require("../../../types");
exports.RBTC_TEST = {
    type: 'native',
    id: 'RBTC_TEST',
    name: 'Rootstock Testnet',
    symbol: 'RBTC',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 31,
    rpcUrl: 'https://public-node.testnet.rsk.co',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
