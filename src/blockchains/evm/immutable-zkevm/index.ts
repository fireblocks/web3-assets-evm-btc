import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const IMX_ZKEVM: NativeAssetConfig = {
  type: "native",
  id: "IMX_ZKEVM",
  name: "Immutable zkEVM",
  symbol: "IMX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 13371,
  rpcUrl: "https://rpc.immutable.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
