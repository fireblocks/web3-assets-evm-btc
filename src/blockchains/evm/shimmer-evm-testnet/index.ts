import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const SMR_TEST: NativeAssetConfig = {
  type: "native",
  id: "SMR_TEST",
  name: "Shimmer EVM Testnet",
  symbol: "SMR",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1073,
  rpcUrl: "https://json-rpc.evm.testnet.shimmer.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
