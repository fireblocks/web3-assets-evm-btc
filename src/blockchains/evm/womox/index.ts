import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const WOMOX: NativeAssetConfig = {
  type: 'native',
  id: 'WOMOX',
  name: 'WorldMobile Testnet',
  symbol: 'WOM',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 323432,
  rpcUrl: 'https://worldmobile-testnet.g.alchemy.com/public',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
