"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WOMOX = void 0;
const types_1 = require("../../../types");
exports.WOMOX = {
    type: 'native',
    id: 'WOMOX',
    name: 'WorldMobile Testnet',
    symbol: 'WOM',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 60,
    decimals: 18,
    evmChainId: 323432,
    rpcUrl: 'https://worldmobile-testnet.g.alchemy.com/public',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
