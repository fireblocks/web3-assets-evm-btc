import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_TEST_HOODI: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST_HOODI",
  name: "Ethereum Hoodi Testnet",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 560048,
  rpcUrl: "https://0xrpc.io/hoodi",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
