import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CANTO_TEST: NativeAssetConfig = {
  type: "native",
  id: "CANTO_TEST",
  name: "Canto Testnet",
  symbol: "CANTO",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 7701,
  rpcUrl: "https://canto-testnet.plexnode.wtf",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
