import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MEGA_ETH_TEST: NativeAssetConfig = {
  type: "native",
  id: "MEGA_ETH_TEST",
  name: "MegaETH Testnet",
  symbol: "MEGA",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 6342,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
