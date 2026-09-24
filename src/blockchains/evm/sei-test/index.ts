import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SEI_TEST: NativeAssetConfig = {
  type: "native",
  id: "SEI_TEST",
  name: "Sei Test",
  symbol: "SEI",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1328,
  rpcUrl: "https://sei-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
