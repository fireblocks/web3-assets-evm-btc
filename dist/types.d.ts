export declare enum Algorithm {
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
    memoName?: string;
    memoRequired?: boolean;
    memoMaxLength?: number;
    memoType?: 'text' | 'numeric' | 'hex';
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
}
export interface NativeAssetConfig extends BaseAssetConfig {
    type: 'native';
    algorithm: Algorithm;
    coinType: number;
    addressCapabilities?: AddressCapabilities;
    memoCapabilities?: MemoCapabilities;
    evmChainId?: number;
    rpcUrl?: string;
    utxoRpcEndpoints?: UtxoRpcEndpoint[];
}
export interface TokenAssetConfig extends BaseAssetConfig {
    type: 'token';
    blockchainId: string;
    tokenStandard: string;
    contractAddress?: string;
    mintAddress?: string;
}
export type AssetConfig = NativeAssetConfig | TokenAssetConfig;
export interface CustomEVMNetwork {
    id: string;
    name: string;
    symbol: string;
    decimals: number;
    rpcUrl: string;
    chainId: number;
}
