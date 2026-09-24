// Type definitions for asset configurations
// Pure types - zero dependencies

export enum Algorithm {
  ecdsa = "ECDSA",
  eddsa = "EdDSA"
}
export interface AddressType {
  id: string;
  name: string;
  description?: string;
}

export interface MemoCapabilities {
  supportsMemo: boolean;
  memoName?: string; // Display name (e.g., "Note", "Destination Tag", "Memo")
  memoRequired?: boolean; // Whether memo is required for this blockchain
  memoMaxLength?: number; // Maximum length in bytes/characters
  memoType?: 'text' | 'numeric' | 'hex'; // Type of memo supported
}

export interface AddressCapabilities {
  supportsMultipleAddresses: boolean;
  addressTypes?: AddressType[];
  derivationStrategy?: 'single' | 'multiple';
}

export interface BaseAssetConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
}

export type UtxoProviderType = 'esplora' | 'mempool' | 'blockchair' | 'blockcypher' | 'whatsonchain' | 'actorforth' | 'sochain' | 'bitails';

export interface UtxoRpcEndpoint {
  url: string;
  providerType: UtxoProviderType;
  // API keys are intentionally excluded here - they are injected at runtime from
  // secure settings (Electron safeStorage) and never stored in asset config files.
}

export interface NativeAssetConfig extends BaseAssetConfig {
  type: 'native';
  algorithm: Algorithm;
  coinType: number;
  addressCapabilities?: AddressCapabilities;
  memoCapabilities?: MemoCapabilities;
  evmChainId?: number; // EVM chain ID for transaction signing (e.g., 1 for Ethereum mainnet)
  rpcUrl?: string; // Primary RPC endpoint URL
  utxoRpcEndpoints?: UtxoRpcEndpoint[]; // Ordered list of UTXO providers (primary first)
}

export interface TokenAssetConfig extends BaseAssetConfig {
  type: 'token';
  blockchainId: string;
  tokenStandard: string;
  contractAddress?: string;
  mintAddress?: string;
}

export type AssetConfig = NativeAssetConfig | TokenAssetConfig;

// Custom EVM network definition for user-added networks
export interface CustomEVMNetwork {
  id: string; // Generated ID (e.g., "CUSTOM_1")
  name: string; // User-friendly name
  symbol: string; // Native currency symbol
  decimals: number; // Native currency decimals
  rpcUrl: string; // RPC endpoint URL
  chainId: number; // EVM chain ID (for transaction signing, not our internal ID)
}
