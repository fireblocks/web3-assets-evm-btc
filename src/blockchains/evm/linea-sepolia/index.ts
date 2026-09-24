import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const LINEA_SEPOLIA_TEST: NativeAssetConfig = {
  type: "native",
  id: "LINEA_SEPOLIA_TEST",
  name: "Linea Sepolia",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 59141,
  rpcUrl: "https://rpc.sepolia.linea.build",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
