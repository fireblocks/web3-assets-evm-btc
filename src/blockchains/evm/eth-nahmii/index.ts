import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_NAHMII: NativeAssetConfig = {
  type: "native",
  id: "ETH_NAHMII",
  name: "Nahmii",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 4061,
  rpcUrl: "https://rpc.n3.nahmii.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
