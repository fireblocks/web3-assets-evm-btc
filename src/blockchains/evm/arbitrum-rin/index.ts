import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ARBITRUM_RIN: NativeAssetConfig = {
  type: "native",
  id: "ARBITRUM_RIN",
  name: "Arbitrum Testnet Rinkeby",
  symbol: "ARB",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 421611,
  rpcUrl: "https://rinkeby.arbitrum.io/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
