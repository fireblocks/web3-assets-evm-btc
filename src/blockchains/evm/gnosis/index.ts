import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const XDAI: NativeAssetConfig = {
  type: "native",
  id: "xDAI",
  name: "Gnosis",
  symbol: "xDAI",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 100,
  rpcUrl: "https://rpc.gnosischain.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
