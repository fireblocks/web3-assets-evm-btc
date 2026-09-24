import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const OAS_TEST: NativeAssetConfig = {
  type: "native",
  id: "OAS_TEST",
  name: "Oasys Testnet",
  symbol: "OAS",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 9372,
  rpcUrl: "https://rpc.testnet.oasys.games",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
