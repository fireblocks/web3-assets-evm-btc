"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BTC_TEST = exports.BTC = void 0;
const types_1 = require("../../types");
exports.BTC = {
    type: 'native',
    id: 'BTC',
    name: 'Bitcoin',
    symbol: 'BTC',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 0,
    decimals: 8,
    rpcUrl: 'https://blockstream.info/api',
    utxoRpcEndpoints: [
        { url: 'https://blockstream.info/api', providerType: 'esplora' },
        { url: 'https://mempool.space/api', providerType: 'mempool' },
        { url: 'https://api.blockchair.com/bitcoin', providerType: 'blockchair' },
    ],
    addressCapabilities: {
        supportsMultipleAddresses: true,
        derivationStrategy: 'multiple',
        addressTypes: [
            { id: 'legacy', name: 'Legacy (P2PKH)', description: 'Traditional Bitcoin addresses starting with 1' },
            { id: 'segwit', name: 'Native SegWit (P2WPKH)', description: 'Bech32 addresses starting with bc1' },
        ],
    },
};
exports.BTC_TEST = {
    type: 'native',
    id: 'BTC_TEST',
    name: 'Bitcoin Testnet',
    symbol: 'BTC',
    algorithm: types_1.Algorithm.ecdsa,
    coinType: 1,
    decimals: 8,
    rpcUrl: 'https://blockstream.info/testnet/api',
    utxoRpcEndpoints: [
        { url: 'https://blockstream.info/testnet/api', providerType: 'esplora' },
        { url: 'https://mempool.space/testnet/api', providerType: 'mempool' },
    ],
    addressCapabilities: {
        supportsMultipleAddresses: true,
        derivationStrategy: 'multiple',
        addressTypes: [
            { id: 'legacy', name: 'Legacy (P2PKH)', description: 'Testnet addresses starting with m or n' },
            { id: 'segwit', name: 'Native SegWit (P2WPKH)', description: 'Bech32 testnet addresses starting with tb1' },
        ],
    },
};
