import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const SCROLL_SEPOLIA_TEST: NativeAssetConfig = {
  type: "native",
  id: "SCROLL_SEPOLIA_TEST",
  name: "Scroll Sepolia",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 534351,
  rpcUrl: "https://sepolia-rpc.scroll.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
