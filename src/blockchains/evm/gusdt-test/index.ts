import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const GUSDT_TEST: NativeAssetConfig = {
  type: "native",
  id: "GUSDT_TEST",
  name: "Stable Test",
  symbol: "GUS",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 2201,
  rpcUrl: "https://rpc.testnet.stable.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
