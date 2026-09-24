import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH_SONEIUM: NativeAssetConfig = {
  type: "native",
  id: "ETH_SONEIUM",
  name: "Soneium",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1868,
  rpcUrl: "https://rpc.soneium.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
