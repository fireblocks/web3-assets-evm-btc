import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const METIS_EVM: NativeAssetConfig = {
  type: "native",
  id: "METIS_EVM",
  name: "Metis",
  symbol: "MET",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1088,
  rpcUrl: "https://metis.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
