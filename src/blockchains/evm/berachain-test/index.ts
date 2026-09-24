import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BERACHAIN_TEST: NativeAssetConfig = {
  type: "native",
  id: "BERACHAIN_TEST",
  name: "Berachain Testnet",
  symbol: "BER",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 80069,
  rpcUrl: "https://berachain-bepolia.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
