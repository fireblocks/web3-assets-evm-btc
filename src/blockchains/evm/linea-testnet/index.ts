import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const LINEA_TEST: NativeAssetConfig = {
  type: "native",
  id: "LINEA_TEST",
  name: "Linea Goerli",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 59140,
  rpcUrl: "https://rpc.sepolia.linea.build",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
