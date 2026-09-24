import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const PLASMA: NativeAssetConfig = {
  type: "native",
  id: "PLASMA",
  name: "Plasma",
  symbol: "PLA",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 9745,
  rpcUrl: "https://plasma.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
