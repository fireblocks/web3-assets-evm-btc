import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const POLYGON_TEST_MUMBAI: NativeAssetConfig = {
  type: "native",
  id: "POLYGON_TEST_MUMBAI",
  name: "Polygon Testnet Mumbai",
  symbol: "POL",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 80001,
  rpcUrl: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
