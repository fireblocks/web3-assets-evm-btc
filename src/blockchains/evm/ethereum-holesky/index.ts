import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH_TEST6: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST6",
  name: "Ethereum Holesky",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 17000,
  rpcUrl: "https://holesky.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
