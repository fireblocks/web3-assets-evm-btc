// Main export file for asset definitions
// Pure asset definitions - zero dependencies
// Shared between renderer (UI) and main process (IPC handlers)

// Export types
export type {
  AddressType,
  AddressCapabilities,
  BaseAssetConfig,
  NativeAssetConfig,
  TokenAssetConfig,
  AssetConfig,
  CustomEVMNetwork,
  UtxoProviderType,
  UtxoRpcEndpoint,
} from './types';

// Export enum
export { Algorithm } from './types';

// Export asset arrays from generated registry
export { NATIVE_ASSETS, TOKEN_ASSETS } from './registry/assetsRegistry.generated';

// Import for internal use
import { NATIVE_ASSETS, TOKEN_ASSETS } from './registry/assetsRegistry.generated';
import type { AssetConfig, NativeAssetConfig, TokenAssetConfig, Algorithm } from './types';

// Runtime tokens loaded from JSON at startup (not compiled into the bundle)
let _runtimeTokens: TokenAssetConfig[] = [];

export function setRuntimeTokens(tokens: TokenAssetConfig[]): void {
  _runtimeTokens = tokens;
}

export function getRuntimeTokens(): TokenAssetConfig[] {
  return _runtimeTokens;
}

// Combined asset array (compile-time only — does not include runtime tokens)
export const SUPPORTED_ASSETS: AssetConfig[] = [
  ...NATIVE_ASSETS,
  ...TOKEN_ASSETS,
];

// Utility functions
export function getAssetConfig(assetId: string): AssetConfig | undefined {
  return SUPPORTED_ASSETS.find(asset => asset.id === assetId)
      ?? _runtimeTokens.find(asset => asset.id === assetId);
}

export function getNativeAssets(): NativeAssetConfig[] {
  return NATIVE_ASSETS;
}

export function getTokenAssets(): TokenAssetConfig[] {
  return TOKEN_ASSETS;
}

export function getAssetsByAlgorithm(algorithm: Algorithm): NativeAssetConfig[] {
  return NATIVE_ASSETS.filter(asset => asset.algorithm === algorithm);
}

export function getTokensByBlockchain(blockchainId: string): TokenAssetConfig[] {
  return TOKEN_ASSETS.filter(token => token.blockchainId === blockchainId);
}

/**
 * Block explorer URL mappings for different blockchains
 */
const BLOCK_EXPLORER_URLS: Record<string, string> = {
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
export function getBlockExplorerUrl(blockchainId: string): string | undefined {
  return BLOCK_EXPLORER_URLS[blockchainId];
}

/**
 * Get transaction URL on block explorer
 */
export function getTransactionExplorerUrl(blockchainId: string, txHash: string): string | undefined {
  const baseUrl = getBlockExplorerUrl(blockchainId);
  if (!baseUrl) return undefined;

  // Special handling for Bitcoin
  if (blockchainId === 'BTC') {
    return `${baseUrl}/tx/${txHash}`;
  }

  // Default for EVM chains
  return `${baseUrl}/tx/${txHash}`;
}

export function isNativeAsset(assetId: string): boolean {
  const asset = getAssetConfig(assetId);
  return asset?.type === 'native';
}

export function isTokenAsset(assetId: string): boolean {
  const asset = getAssetConfig(assetId);
  return asset?.type === 'token';
}

export function isEVMCompatible(assetId: string): boolean {
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

function matchesTestnetName(value: string): boolean {
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
export function isTestnetAsset(
  assetIdOrConfig: string | AssetConfig | { id?: string; name?: string; coinType?: number },
): boolean {
  const config = typeof assetIdOrConfig === 'string'
    ? getAssetConfig(assetIdOrConfig)
    : assetIdOrConfig;

  if (!config) {
    // Unknown asset id — fall back to name-based detection on the raw string.
    return typeof assetIdOrConfig === 'string' && matchesTestnetName(assetIdOrConfig);
  }

  const id = config.id ?? '';

  // EVM testnets are derived at coinType 1.
  if ('coinType' in config && (config as { coinType?: number }).coinType === 1) {
    return true;
  }

  // Westend is a Polkadot testnet without a "test" marker in its id.
  if (id === 'WND') return true;

  return matchesTestnetName(id) || matchesTestnetName(config.name ?? '');
}
