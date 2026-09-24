import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CRONOS_TEST: NativeAssetConfig = {
  type: "native",
  id: "CRONOS_TEST",
  name: "Cronos Test",
  symbol: "CRO",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 338,
  rpcUrl: "https://endpoints.omniatech.io/v1/cronos/testnet/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
