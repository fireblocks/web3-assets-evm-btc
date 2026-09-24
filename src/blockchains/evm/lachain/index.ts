import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const LACHAIN: NativeAssetConfig = {
  type: "native",
  id: "LACHAIN",
  name: "LaChain",
  symbol: "LAC",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 274,
  rpcUrl: "https://rpc1.mainnet.lachain.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
