import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const OAS: NativeAssetConfig = {
  type: "native",
  id: "OAS",
  name: "Oasys",
  symbol: "OAS",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 248,
  rpcUrl: "https://rpc.mainnet.oasys.games",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
