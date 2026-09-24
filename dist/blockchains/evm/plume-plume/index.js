"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLUME_PLUME = void 0;
const types_1 = require("../../../types");
exports.PLUME_PLUME = {
    type: 'native',
    id: 'PLUME_PLUME',
    name: 'Plume',
    symbol: 'PLU',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 98866,
    rpcUrl: 'https://plume.drpc.org',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
