import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CELO_ALFAJORES: NativeAssetConfig = {
  type: "native",
  id: "CELO_ALFAJORES",
  name: "Celo Alfajores Testnet",
  symbol: "CEL",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 44787,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
