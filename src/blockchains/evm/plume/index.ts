import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const PLUME: NativeAssetConfig = {
  type: "native",
  id: "PLUME",
  name: "Plume",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 98865,
  rpcUrl: "https://rpc.plumenetwork.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
