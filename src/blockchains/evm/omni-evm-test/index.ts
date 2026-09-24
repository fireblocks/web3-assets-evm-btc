import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const OMNI_EVM_TEST: NativeAssetConfig = {
  type: "native",
  id: "OMNI_EVM_TEST",
  name: "Omni EVM Testnet",
  symbol: "OMNI",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 164,
  rpcUrl: "https://omega.omni.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
