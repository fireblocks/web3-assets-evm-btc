import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZERO_G_EVM: NativeAssetConfig = {
  type: "native",
  id: "ZERO_G_EVM",
  name: "0G Aristotle",
  symbol: "ZER",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 16661,
  rpcUrl: "https://evmrpc.0g.ai",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
