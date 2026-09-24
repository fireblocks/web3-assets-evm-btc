import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const WEMIX_TEST: NativeAssetConfig = {
  type: "native",
  id: "WEMIX_TEST",
  name: "WEMIX Testnet",
  symbol: "WEMIX",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1112,
  rpcUrl: "https://api.test.wemix.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
