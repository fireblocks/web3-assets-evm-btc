import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHW: NativeAssetConfig = {
  type: "native",
  id: "ETHW",
  name: "EthereumPoW",
  symbol: "ETHW",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 10001,
  rpcUrl: "https://mainnet.ethereumpow.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
