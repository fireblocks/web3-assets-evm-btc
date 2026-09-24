import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH_OPT: NativeAssetConfig = {
  type: 'native',
  id: 'ETH-OPT',
  name: 'Ethereum (Optimism)',
  symbol: 'ETH',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 10,
  rpcUrl: "https://mainnet.optimism.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
