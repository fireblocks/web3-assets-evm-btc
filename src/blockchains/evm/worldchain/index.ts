import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const WORLDCHAIN: NativeAssetConfig = {
  type: "native",
  id: "WORLDCHAIN",
  name: "World Chain",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 480,
  rpcUrl: "https://worldchain-mainnet.g.alchemy.com/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
