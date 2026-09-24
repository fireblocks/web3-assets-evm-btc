import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const KLAY_KAIA_TEST: NativeAssetConfig = {
  type: "native",
  id: "KLAY_KAIA_TEST",
  name: "Kaia Kairos",
  symbol: "KAIA",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1001,
  rpcUrl: "https://public-en-kairos.node.kaia.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
