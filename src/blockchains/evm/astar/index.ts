import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ASTR_ASTR: NativeAssetConfig = {
  type: "native",
  id: "ASTR_ASTR",
  name: "Astar",
  symbol: "ASTR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 592,
  rpcUrl: "https://evm.astar.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
