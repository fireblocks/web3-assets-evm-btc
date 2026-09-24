import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const TKX: NativeAssetConfig = {
  type: "native",
  id: "TKX",
  name: "TokenizeXchange",
  symbol: "TKX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 18888,
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
