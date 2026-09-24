import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const FILECOIN_FEVM: NativeAssetConfig = {
  type: "native",
  id: "FILECOIN_FEVM",
  name: "Filecoin EVM",
  symbol: "FIL",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 314,
  rpcUrl: "https://api.node.glif.io/rpc/v1",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
