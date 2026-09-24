import type { NativeAssetConfig, TokenAssetConfig } from '../types';
/**
 * All native blockchain assets
 * Auto-discovered from blockchains/ directory
 */
export declare const NATIVE_ASSETS: NativeAssetConfig[];
/**
 * All token assets
 * Auto-discovered from blockchains/<blockchain>/tokens/ directories
 */
export declare const TOKEN_ASSETS: TokenAssetConfig[];
