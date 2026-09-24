"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBTC = void 0;
const types_1 = require("../../../types");
exports.RBTC = {
    type: 'native',
    id: 'RBTC',
    name: 'Rootstock',
    symbol: 'RBTC',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 30,
    rpcUrl: 'https://public-node.rsk.co',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
