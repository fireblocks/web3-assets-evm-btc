import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const FASTEX_BAHAMUT: NativeAssetConfig = {
  type: "native",
  id: "FASTEX_BAHAMUT",
  name: "Fastex Bahamut",
  symbol: "FTN",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 5165,
  rpcUrl: "https://rpc1.bahamut.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
