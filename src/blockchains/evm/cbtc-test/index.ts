import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CBTC_TEST: NativeAssetConfig = {
  type: "native",
  id: "CBTC_TEST",
  name: "Citrea Testnet",
  symbol: "CBTC",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5115,
  rpcUrl: "https://citrea-testnet-rpc.cascadexyz.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
