"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANVAS_TEST = void 0;
const types_1 = require("../../../types");
exports.CANVAS_TEST = {
    type: 'native',
    id: 'CANVAS_TEST',
    name: 'Canvas Testnet',
    symbol: 'CAN',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 2091074337,
    rpcUrl: 'https://testnet-rpc.canvas.im',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
