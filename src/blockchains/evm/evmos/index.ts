import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const EVMOS: NativeAssetConfig = {
  type: "native",
  id: "EVMOS",
  name: "EVMOS",
  symbol: "EVMOS",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 9001,
  rpcUrl: "https://evmos-evm.publicnode.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
