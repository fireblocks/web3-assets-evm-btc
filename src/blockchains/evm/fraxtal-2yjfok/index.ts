import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const FRAXTAL_2YJFOK: NativeAssetConfig = {
  type: "native",
  id: "FRAXTAL_2YJFOK",
  name: "Fraxtal",
  symbol: "FRA",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 252,
  rpcUrl: "https://fraxtal.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
