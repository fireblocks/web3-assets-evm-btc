import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH_AETH_SEPOLIA: NativeAssetConfig = {
  type: "native",
  id: "ETH-AETH_SEPOLIA",
  name: "Ethereum (Arbitrum Sepolia)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 421614,
  rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
