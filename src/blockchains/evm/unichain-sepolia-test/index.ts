import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const UNICHAIN_SEPOLIA_TEST: NativeAssetConfig = {
  type: "native",
  id: "UNICHAIN_SEPOLIA_TEST",
  name: "Unichain Sepolia Test",
  symbol: "UNI",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1301,
  rpcUrl: "https://endpoints.omniatech.io/v1/unichain/sepolia/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
