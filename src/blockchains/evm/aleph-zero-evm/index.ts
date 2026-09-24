import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ALEPH_ZERO_EVM: NativeAssetConfig = {
  type: "native",
  id: "ALEPH_ZERO_EVM",
  name: "Aleph Zero EVM",
  symbol: "AZERO",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 41455,
  rpcUrl: "https://rpc.alephzero.raas.gelato.cloud",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
