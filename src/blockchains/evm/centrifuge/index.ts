import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CENTRIFUGE: NativeAssetConfig = {
  type: "native",
  id: "CENTRIFUGE",
  name: "Centrifuge",
  symbol: "CEN",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 2031,
  rpcUrl: "https://fullnode.centrifuge.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
