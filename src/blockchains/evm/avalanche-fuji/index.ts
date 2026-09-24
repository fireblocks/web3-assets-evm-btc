import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const AVALANCHE_FUJI: NativeAssetConfig = {
  type: "native",
  id: "AVALANCHE_FUJI",
  name: "Avalanche Fuji Testnet",
  symbol: "AVA",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 43113,
  rpcUrl: "https://endpoints.omniatech.io/v1/avax/fuji/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
