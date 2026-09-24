import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BOB_CHAIN_TEST: NativeAssetConfig = {
  type: "native",
  id: "BOB_CHAIN_TEST",
  name: "Bob Testnet",
  symbol: "BOB",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 808813,
  rpcUrl: "https://bob-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
