import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const REDBELLY_TEST: NativeAssetConfig = {
  type: "native",
  id: "REDBELLY_TEST",
  name: "Redbelly Testnet",
  symbol: "RBNT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 153,
  rpcUrl: "https://governors.testnet.redbelly.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
