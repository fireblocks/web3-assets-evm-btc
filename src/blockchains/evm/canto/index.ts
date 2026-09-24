import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CANTO: NativeAssetConfig = {
  type: "native",
  id: "CANTO",
  name: "Canto",
  symbol: "CANTO",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 7700,
  rpcUrl: "https://canto.gravitychain.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
