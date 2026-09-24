import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZKEVM_TEST: NativeAssetConfig = {
  type: "native",
  id: "ZKEVM_TEST",
  name: "zkEVM Testnet",
  symbol: "ZKE",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1442,
  rpcUrl: "https://endpoints.omniatech.io/v1/polygon-zkevm/testnet/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
