import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_TEST5: NativeAssetConfig = {
  type: "native",
  id: "ETH_TEST5",
  name: "Ethereum Test (Sepolia)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 11155111,
  rpcUrl: "https://sepolia.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
