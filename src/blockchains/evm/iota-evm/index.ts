import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const IOTA_EVM: NativeAssetConfig = {
  type: "native",
  id: "IOTA_EVM",
  name: "IOTA EVM",
  symbol: "IOTA",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 8822,
  rpcUrl: "https://json-rpc.evm.iotaledger.net",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
