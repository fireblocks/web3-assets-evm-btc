import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH_OPT_SEPOLIA: NativeAssetConfig = {
  type: 'native',
  id: 'ETH-OPT-SEPOLIA',
  name: 'Ethereum (Optimism Sepolia)',
  symbol: 'ETH',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 11155420,
  rpcUrl: "https://sepolia.optimism.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
