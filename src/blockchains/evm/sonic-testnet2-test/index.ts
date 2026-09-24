import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SONIC_TESTNET2_TEST: NativeAssetConfig = {
  type: "native",
  id: "SONIC_TESTNET2_TEST",
  name: "Sonic Testnet2",
  symbol: "SON",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 14601,
  rpcUrl: "https://sonic-testnet-v2.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
