import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CELO: NativeAssetConfig = {
  type: "native",
  id: "CELO",
  name: "Celo",
  symbol: "CELO",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 42220,
  rpcUrl: "https://forno.celo.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
