export type { AddressType, AddressCapabilities, BaseAssetConfig, NativeAssetConfig, TokenAssetConfig, AssetConfig, CustomEVMNetwork, UtxoProviderType, UtxoRpcEndpoint, } from './types';
export { Algorithm } from './types';
export { NATIVE_ASSETS, TOKEN_ASSETS } from './registry/assetsRegistry.generated';
import type { AssetConfig, NativeAssetConfig, TokenAssetConfig, Algorithm } from './types';
export declare function setRuntimeTokens(tokens: TokenAssetConfig[]): void;
export declare function getRuntimeTokens(): TokenAssetConfig[];
export declare const SUPPORTED_ASSETS: AssetConfig[];
export declare function getAssetConfig(assetId: string): AssetConfig | undefined;
export declare function getNativeAssets(): NativeAssetConfig[];
export declare function getTokenAssets(): TokenAssetConfig[];
export declare function getAssetsByAlgorithm(algorithm: Algorithm): NativeAssetConfig[];
export declare function getTokensByBlockchain(blockchainId: string): TokenAssetConfig[];
/**
 * Get block explorer URL for a blockchain
 */
export declare function getBlockExplorerUrl(blockchainId: string): string | undefined;
/**
 * Get transaction URL on block explorer
 */
export declare function getTransactionExplorerUrl(blockchainId: string, txHash: string): string | undefined;
export declare function isNativeAsset(assetId: string): boolean;
export declare function isTokenAsset(assetId: string): boolean;
export declare function isEVMCompatible(assetId: string): boolean;
/**
 * Determine whether an asset is a testnet asset.
 * Accepts either an asset id (looked up in the registry) or a config-like
 * object (so it also works for custom networks/tokens not in the registry).
 *
 * Detection: EVM testnets are derived at BIP44 coinType 1 (a reliable signal,
 * since mainnet never uses coinType 1). Non-EVM testnets (e.g. SOL_TEST at
 * coinType 501) and special cases (Westend) are caught by name.
 */
export declare function isTestnetAsset(assetIdOrConfig: string | AssetConfig | {
    id?: string;
    name?: string;
    coinType?: number;
}): boolean;
