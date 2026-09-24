import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const IMX_ZKEVM_TEST: NativeAssetConfig = {
  type: "native",
  id: "IMX_ZKEVM_TEST",
  name: "Immutable zkEVM Testnet",
  symbol: "IMX",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 13473,
  rpcUrl: "https://rpc.testnet.immutable.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
