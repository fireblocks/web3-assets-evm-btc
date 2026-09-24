"use strict";
// Main export file for asset definitions
// Pure asset definitions - zero dependencies
// Shared between renderer (UI) and main process (IPC handlers)
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_ASSETS = exports.TOKEN_ASSETS = exports.NATIVE_ASSETS = exports.Algorithm = void 0;
exports.setRuntimeTokens = setRuntimeTokens;
exports.getRuntimeTokens = getRuntimeTokens;
exports.getAssetConfig = getAssetConfig;
exports.getNativeAssets = getNativeAssets;
exports.getTokenAssets = getTokenAssets;
exports.getAssetsByAlgorithm = getAssetsByAlgorithm;
exports.getTokensByBlockchain = getTokensByBlockchain;
exports.getBlockExplorerUrl = getBlockExplorerUrl;
exports.getTransactionExplorerUrl = getTransactionExplorerUrl;
exports.isNativeAsset = isNativeAsset;
exports.isTokenAsset = isTokenAsset;
exports.isEVMCompatible = isEVMCompatible;
exports.isTestnetAsset = isTestnetAsset;
// Export enum
var types_1 = require("./types");
Object.defineProperty(exports, "Algorithm", { enumerable: true, get: function () { return types_1.Algorithm; } });
// Export asset arrays from generated registry
var assetsRegistry_generated_1 = require("./registry/assetsRegistry.generated");
Object.defineProperty(exports, "NATIVE_ASSETS", { enumerable: true, get: function () { return assetsRegistry_generated_1.NATIVE_ASSETS; } });
Object.defineProperty(exports, "TOKEN_ASSETS", { enumerable: true, get: function () { return assetsRegistry_generated_1.TOKEN_ASSETS; } });
// Import for internal use
const assetsRegistry_generated_2 = require("./registry/assetsRegistry.generated");
// Runtime tokens loaded from JSON at startup (not compiled into the bundle)
let _runtimeTokens = [];
function setRuntimeTokens(tokens) {
    _runtimeTokens = tokens;
}
function getRuntimeTokens() {
    return _runtimeTokens;
}
// Combined asset array (compile-time only — does not include runtime tokens)
exports.SUPPORTED_ASSETS = [
    ...assetsRegistry_generated_2.NATIVE_ASSETS,
    ...assetsRegistry_generated_2.TOKEN_ASSETS,
];
// Utility functions
function getAssetConfig(assetId) {
    return exports.SUPPORTED_ASSETS.find(asset => asset.id === assetId)
        ?? _runtimeTokens.find(asset => asset.id === assetId);
}
function getNativeAssets() {
    return assetsRegistry_generated_2.NATIVE_ASSETS;
}
function getTokenAssets() {
    return assetsRegistry_generated_2.TOKEN_ASSETS;
}
function getAssetsByAlgorithm(algorithm) {
    return assetsRegistry_generated_2.NATIVE_ASSETS.filter(asset => asset.algorithm === algorithm);
}
function getTokensByBlockchain(blockchainId) {
    return assetsRegistry_generated_2.TOKEN_ASSETS.filter(token => token.blockchainId === blockchainId);
}
/**
 * Block explorer URL mappings for different blockchains
 */
const BLOCK_EXPLORER_URLS = {
    'ETH': 'https://etherscan.io',
    'POL': 'https://polygonscan.com',
    'AVAX': 'https://snowtrace.io',
    'BASE': 'https://basescan.org',
    'BNB': 'https://bscscan.com',
    'ARB': 'https://arbiscan.io',
    'OP': 'https://optimistic.etherscan.io',
    'BTC': 'https://blockstream.info',
    'SOL': 'https://solscan.io',
};
/**
 * Get block explorer URL for a blockchain
 */
function getBlockExplorerUrl(blockchainId) {
    return BLOCK_EXPLORER_URLS[blockchainId];
}
/**
 * Get transaction URL on block explorer
 */
function getTransactionExplorerUrl(blockchainId, txHash) {
    const baseUrl = getBlockExplorerUrl(blockchainId);
    if (!baseUrl)
        return undefined;
    // Special handling for Bitcoin
    if (blockchainId === 'BTC') {
        return `${baseUrl}/tx/${txHash}`;
    }
    // Default for EVM chains
    return `${baseUrl}/tx/${txHash}`;
}
function isNativeAsset(assetId) {
    const asset = getAssetConfig(assetId);
    return asset?.type === 'native';
}
function isTokenAsset(assetId) {
    const asset = getAssetConfig(assetId);
    return asset?.type === 'token';
}
function isEVMCompatible(assetId) {
    const asset = getAssetConfig(assetId);
    if (asset?.type === 'native') {
        return asset.algorithm === 'ECDSA';
    }
    return false;
}
// Substrings (case-insensitive) in an asset id or name that mark it as a testnet.
// Covers EVM (sepolia/goerli/…) and non-EVM (devnet, mordor, …) naming.
const TESTNET_NAME_PATTERNS = [
    'test', 'sepolia', 'goerli', 'holesky', 'ropsten', 'rinkeby', 'kovan',
    'mumbai', 'amoy', 'fuji', 'kotti', 'mordor', 'devnet', 'testnet',
];
function matchesTestnetName(value) {
    const lower = value.toLowerCase();
    return TESTNET_NAME_PATTERNS.some((p) => lower.includes(p));
}
/**
 * Determine whether an asset is a testnet asset.
 * Accepts either an asset id (looked up in the registry) or a config-like
 * object (so it also works for custom networks/tokens not in the registry).
 *
 * Detection: EVM testnets are derived at BIP44 coinType 1 (a reliable signal,
 * since mainnet never uses coinType 1). Non-EVM testnets (e.g. SOL_TEST at
 * coinType 501) and special cases (Westend) are caught by name.
 */
function isTestnetAsset(assetIdOrConfig) {
    const config = typeof assetIdOrConfig === 'string'
        ? getAssetConfig(assetIdOrConfig)
        : assetIdOrConfig;
    if (!config) {
        // Unknown asset id — fall back to name-based detection on the raw string.
        return typeof assetIdOrConfig === 'string' && matchesTestnetName(assetIdOrConfig);
    }
    const id = config.id ?? '';
    // EVM testnets are derived at coinType 1.
    if ('coinType' in config && config.coinType === 1) {
        return true;
    }
    // Westend is a Polkadot testnet without a "test" marker in its id.
    if (id === 'WND')
        return true;
    return matchesTestnetName(id) || matchesTestnetName(config.name ?? '');
}
