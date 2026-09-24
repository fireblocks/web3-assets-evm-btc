import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const SCROLL: NativeAssetConfig = {
  type: "native",
  id: "SCROLL",
  name: "Scroll",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 534352,
  rpcUrl: "https://rpc.scroll.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
