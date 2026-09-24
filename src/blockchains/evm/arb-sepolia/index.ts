import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ARB_SEPOLIA: NativeAssetConfig = {
  type: 'native',
  id: 'ARB_SEPOLIA',
  name: 'Arbitrum Testnet Sepolia',
  symbol: 'ARB',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 421614,
  rpcUrl: 'https://endpoints.omniatech.io/v1/arbitrum/sepolia/public',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
