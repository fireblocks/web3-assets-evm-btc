import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CODEX: NativeAssetConfig = {
  type: 'native',
  id: 'CODEX',
  name: 'Codex',
  symbol: 'COD',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 81224,
  rpcUrl: 'https://rpc.codex.xyz',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
