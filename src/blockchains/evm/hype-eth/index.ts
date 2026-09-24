import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HYPE_ETH: NativeAssetConfig = {
  type: "native",
  id: "HYPE_ETH",
  name: "HyperEVM",
  symbol: "HYPE",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 999,
  rpcUrl: "https://rpc.nodeflare.app/hl/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
