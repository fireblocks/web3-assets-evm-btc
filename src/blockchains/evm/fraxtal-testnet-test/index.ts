import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const FRAXTAL_TESTNET_TEST: NativeAssetConfig = {
  type: "native",
  id: "FRAXTAL_TESTNET_TEST",
  name: "Fraxtal Testnet",
  symbol: "FRA",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 2523,
  rpcUrl: "https://fraxtal-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
