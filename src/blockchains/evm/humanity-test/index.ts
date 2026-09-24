import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HUMANITY_TEST: NativeAssetConfig = {
  type: "native",
  id: "HUMANITY_TEST",
  name: "Humanity Protocol Testnet",
  symbol: "HUM",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 7080969,
  rpcUrl: "https://humanity-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
