import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ADI_CHAIN: NativeAssetConfig = {
  type: 'native',
  id: 'ADI_CHAIN',
  name: 'ADI Chain',
  symbol: 'ADI',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 36900,
  rpcUrl: 'https://rpc.adifoundation.ai',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
