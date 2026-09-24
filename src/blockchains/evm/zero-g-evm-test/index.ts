import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZERO_G_EVM_TEST: NativeAssetConfig = {
  type: "native",
  id: "ZERO_G_EVM_TEST",
  name: "0G Galileo",
  symbol: "ZER",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 16601,
  rpcUrl: "https://evmrpc-testnet.0g.ai",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
