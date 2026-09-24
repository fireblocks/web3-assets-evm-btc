import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_TEST3: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST3",
  name: "Ethereum Testnet Goerli",
  symbol: "ETH3",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5,
  rpcUrl: "https://endpoints.omniatech.io/v1/eth/goerli/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
