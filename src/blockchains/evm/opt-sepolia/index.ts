import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const OPT_SEPOLIA: NativeAssetConfig = {
  type: "native",
  id: "OPT_SEPOLIA",
  name: "Optimism Testnet Sepolia",
  symbol: "OPT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 11155420,
  rpcUrl: "https://endpoints.omniatech.io/v1/op/sepolia/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
