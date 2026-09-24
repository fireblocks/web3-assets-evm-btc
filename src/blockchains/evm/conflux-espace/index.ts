import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CONFLUX_ESPACE: NativeAssetConfig = {
  type: "native",
  id: "CONFLUX_ESPACE",
  name: "Conflux eSpace",
  symbol: "CON",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1030,
  rpcUrl: "https://evm.confluxrpc.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
