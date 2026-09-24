import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const BLAST: NativeAssetConfig = {
  type: "native",
  id: "BLAST",
  name: "Blast",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 81457,
  rpcUrl: "https://rpc.blast.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
