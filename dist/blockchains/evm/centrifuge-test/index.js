"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CENTRIFUGE_TEST = void 0;
const types_1 = require("../../../types");
exports.CENTRIFUGE_TEST = {
    type: 'native',
    id: 'CENTRIFUGE_TEST',
    name: 'Centrifuge Test',
    symbol: 'CEN',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 2090,
    rpcUrl: 'https://testnet.centrifuge.io',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
