import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH_ZKEVM_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETH_ZKEVM_TEST",
  name: "Ethereum (Polygon zkEVM Cardona)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 2442,
  rpcUrl: "https://rpc.cardona.zkevm-rpc.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
