import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const LINEA: NativeAssetConfig = {
  type: "native",
  id: "LINEA",
  name: "Linea",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 59144,
  rpcUrl: "https://rpc.linea.build",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
