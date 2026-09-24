import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const GUSDT_STABLE: NativeAssetConfig = {
  type: "native",
  id: "GUSDT_STABLE",
  name: "Stable",
  symbol: "GUS",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 988,
  rpcUrl: "https://stable-mainnet.rpc.sentio.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
