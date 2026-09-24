import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const REDBELLY: NativeAssetConfig = {
  type: "native",
  id: "REDBELLY",
  name: "Redbelly",
  symbol: "RBNT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 151,
  rpcUrl: "https://governors.mainnet.redbelly.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
