import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_ZKSYNC_ERA: NativeAssetConfig = {
  type: "native",
  id: "ETH_ZKSYNC-ERA",
  name: "Ethereum (zkSync Era)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 324,
  rpcUrl: "https://mainnet.era.zksync.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
