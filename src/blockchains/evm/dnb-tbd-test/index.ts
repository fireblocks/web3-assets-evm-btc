import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const DNB_TBD_TEST: NativeAssetConfig = {
  type: "native",
  id: "DNB_TBD_TEST",
  name: "DNB CBDC Test",
  symbol: "DNB",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 3011,
  rpcUrl: "https://api.mainnet.playa3ull.games",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
