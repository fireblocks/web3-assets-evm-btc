"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LUMIA_LUMIA = void 0;
const types_1 = require("../../../types");
exports.LUMIA_LUMIA = {
    type: 'native',
    id: 'LUMIA_LUMIA',
    name: 'Lumia Mainnet',
    symbol: 'LUM',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 994873017,
    rpcUrl: 'https://mainnet-rpc.lumia.org',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
