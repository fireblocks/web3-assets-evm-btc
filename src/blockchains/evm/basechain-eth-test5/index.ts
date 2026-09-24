import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BASECHAIN_ETH_TEST5: NativeAssetConfig = {
  type: "native",
  id: "BASECHAIN_ETH_TEST5",
  name: "Base Testnet Sepolia",
  symbol: "BAS",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 84532,
  rpcUrl: "https://base-sepolia.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
