import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const BASECHAIN_ETH_TEST5: NativeAssetConfig = {
  type: 'native',
  id: 'BASECHAIN_ETH_TEST5',
  name: 'Base Sepolia',
  symbol: 'ETH',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 84532,
  rpcUrl: "https://sepolia.base.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
