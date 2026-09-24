import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ASTR_TEST: NativeAssetConfig = {
  type: "native",
  id: "ASTR_TEST",
  name: "Astar Shibuya",
  symbol: "ASTR",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 81,
  rpcUrl: "https://evm.shibuya.astar.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
