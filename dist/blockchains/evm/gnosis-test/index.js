"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GNOSIS_TEST = void 0;
const types_1 = require("../../../types");
exports.GNOSIS_TEST = {
    type: 'native',
    id: 'GNOSIS_TEST',
    name: 'Gnosis Testnet',
    symbol: 'GNO',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 18,
    evmChainId: 10200,
    rpcUrl: 'https://gnosis-chiado-rpc.publicnode.com',
    addressCapabilities: {
        supportsMultipleAddresses: false,
        derivationStrategy: 'single',
    },
};
